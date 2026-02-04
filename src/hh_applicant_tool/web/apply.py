"""Apply to vacancies with tests via web endpoint."""

from __future__ import annotations

from logging import getLogger
from typing import TYPE_CHECKING, Callable

from .client import AuthRequiredError, GIBBlockedError, WebClient, WebClientError
from .parser import TestFormParser, VacancyForm
from .session import SessionManager

if TYPE_CHECKING:
    from ..utils.config import Config

log = getLogger(__name__)


class ApplyWithTestsError(Exception):
    """Error during apply with tests."""

    pass


class ApplyWithTests:
    """Handler for applying to vacancies that require tests."""

    def __init__(
        self,
        config: Config,
        chrome_profile: str | None = None,
        answer_strategy: str = "first",
        answer_generator: Callable[[list], dict] | None = None,
    ):
        """
        Args:
            config: App config
            chrome_profile: Chrome profile name for cookies
            answer_strategy: "first" or "random" for auto-answers
            answer_generator: Optional custom function to generate answers
                             Receives list of TestQuestion, returns {task_id: value}
        """
        self._session = SessionManager(config, chrome_profile)
        self._client = WebClient(self._session)
        self._parser = TestFormParser()
        self._answer_strategy = answer_strategy
        self._answer_generator = answer_generator

    def init_session(self) -> bool:
        """Initialize session - load cookies and GIB headers."""
        self._session.load_cookies()
        self._session.load_gib_headers()

        if not self._session.is_valid():
            log.warning("Session invalid - missing cookies or GIB headers")
            return False

        return True

    def refresh_gib(self) -> bool:
        """Refresh GIB tokens via nodriver."""
        try:
            headers = self._session.refresh_gib_via_nodriver()
            return bool(headers)
        except Exception as e:
            log.error("Failed to refresh GIB: %s", e)
            return False

    def check_vacancy(self, vacancy_id: str) -> dict:
        """Check vacancy response status.

        Returns dict with:
            - type: "test-required", "already-applied", "modal", "quickResponse", etc
            - redirect_uri: URL for form (if test-required)
        """
        try:
            info = self._client.get_vacancy_response_info(vacancy_id)
            log.debug("Vacancy %s info: %s", vacancy_id, info.get("type", "unknown"))
            return info
        except WebClientError as e:
            log.error("Failed to check vacancy %s: %s", vacancy_id, e)
            return {"type": "error", "error": str(e)}

    def get_form(self, vacancy_id: str) -> VacancyForm | None:
        """Get and parse vacancy test form.

        Returns None if form not available or already applied.
        Sets form.already_applied = True if detected in HTML.
        """
        try:
            html = self._client.get_vacancy_form(vacancy_id)

            # Check for alreadyApplied in HTML (popup API doesn't return it)
            if '"alreadyApplied":true' in html or '"alreadyApplied": true' in html:
                log.info("Vacancy %s: alreadyApplied detected in HTML", vacancy_id)
                form = VacancyForm(vacancy_id=vacancy_id)
                form.already_applied = True
                return form

            form = self._parser.parse(html, vacancy_id)

            if not form.xsrf:
                log.error("No XSRF token found in form")
                return None

            if not form.questions:
                log.warning("No test questions found in form")

            return form

        except WebClientError as e:
            log.error("Failed to get form for %s: %s", vacancy_id, e)
            return None

    def generate_answers(self, form: VacancyForm) -> dict[str, str]:
        """Generate answers for test questions."""
        if self._answer_generator:
            try:
                return self._answer_generator(form.questions)
            except Exception as e:
                log.warning("Custom answer generator failed: %s, using fallback", e)

        return form.generate_answers(strategy=self._answer_strategy)

    def apply(
        self,
        vacancy_id: str,
        resume_hash: str | None = None,
    ) -> dict:
        """Apply to vacancy with test.

        Args:
            vacancy_id: Vacancy ID
            resume_hash: Resume hash (if None, uses first available)

        Returns:
            Result dict with status and details
        """
        result = {
            "vacancy_id": vacancy_id,
            "success": False,
            "error": None,
            "questions_count": 0,
        }

        # Check vacancy status
        info = self.check_vacancy(vacancy_id)
        vtype = info.get("type", "")

        if vtype == "alreadyApplied":
            result["error"] = "already_applied"
            return result

        if vtype == "quickResponse":
            # Quick response = no test required, use API fallback
            result["error"] = "quickResponse:no_test"
            return result

        if vtype not in ("test-required", "modal", "html"):
            # May not need web apply
            result["error"] = f"unexpected_type:{vtype}"
            return result

        # Note: We trust popup type over internal hasTests flag
        # If popup says "test-required" - proceed with form parsing

        # Get form
        form = self.get_form(vacancy_id)
        if not form:
            result["error"] = "form_fetch_failed"
            return result

        # Check if already applied (detected from HTML, popup API misses this)
        if form.already_applied:
            result["error"] = "already_applied"
            return result

        result["questions_count"] = len(form.questions)

        # Determine resume hash
        if not resume_hash:
            if form.resume_hashes:
                resume_hash = form.resume_hashes[0]
                log.debug("Using first resume: %s", resume_hash)
            else:
                result["error"] = "no_resume_available"
                return result

        # Generate answers
        answers = self.generate_answers(form)
        log.debug("Generated %d answers", len(answers))

        # Submit
        try:
            resp = self._client.submit_vacancy_response(
                vacancy_id=vacancy_id,
                resume_hash=resume_hash,
                answers=answers,
                xsrf=form.xsrf,
                uid_pk=form.uid_pk,
            )

            if resp.get("status_code") == 200 or resp.get("success"):
                result["success"] = True
                log.info("Applied to vacancy %s with test", vacancy_id)
            else:
                result["error"] = f"submit_failed:{resp}"
                log.warning("Submit failed: %s", resp)

        except GIBBlockedError:
            result["error"] = "gib_blocked"
            log.error("GIB blocked request for vacancy %s", vacancy_id)
        except AuthRequiredError:
            result["error"] = "auth_required"
            log.error("Auth required for vacancy %s", vacancy_id)
        except WebClientError as e:
            result["error"] = f"request_error:{e}"
            log.error("Request error: %s", e)

        return result

    def apply_batch(
        self,
        vacancies: list[dict],
        resume_hash: str | None = None,
        on_result: Callable[[dict], None] | None = None,
    ) -> dict:
        """Apply to multiple vacancies.

        Args:
            vacancies: List of vacancy dicts with 'id' key
            resume_hash: Resume hash to use
            on_result: Callback for each result

        Returns:
            Summary stats
        """
        stats = {
            "total": len(vacancies),
            "success": 0,
            "failed": 0,
            "skipped": 0,
            "gib_blocked": 0,
        }

        for vacancy in vacancies:
            vacancy_id = str(vacancy.get("id", ""))
            if not vacancy_id:
                stats["skipped"] += 1
                continue

            result = self.apply(vacancy_id, resume_hash)

            if result["success"]:
                stats["success"] += 1
            elif result["error"] == "gib_blocked":
                stats["gib_blocked"] += 1
                stats["failed"] += 1
                # Try to refresh GIB and continue
                if self.refresh_gib():
                    log.info("GIB refreshed, continuing...")
                else:
                    log.error("GIB refresh failed, stopping batch")
                    break
            elif result["error"] == "already_applied":
                stats["skipped"] += 1
            else:
                stats["failed"] += 1

            if on_result:
                on_result(result)

        return stats
