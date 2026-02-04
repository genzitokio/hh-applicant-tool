"""Web client using curl_cffi for TLS impersonation."""

from __future__ import annotations

import time
from logging import getLogger
from typing import TYPE_CHECKING, Any

if TYPE_CHECKING:
    from .session import SessionManager

log = getLogger(__name__)


class WebClientError(Exception):
    """Base exception for web client errors."""

    pass


class GIBBlockedError(WebClientError):
    """Raised when request is blocked by GIB (Group-IB)."""

    pass


class AuthRequiredError(WebClientError):
    """Raised when authentication is required."""

    pass


class WebClient:
    """HTTP client using curl_cffi with TLS impersonation.

    Uses persistent Session and init request to bypass GIB protection.
    """

    DEFAULT_TIMEOUT = 60
    RETRY_DELAYS = [0, 2, 5, 10]  # First attempt without delay
    IMPERSONATE = "chrome124"

    def __init__(self, session: SessionManager, proxy: str | None = None):
        self._session_mgr = session
        self._last_request_time: float = 0
        self._min_request_interval: float = 1.0
        self._proxy = proxy or session.get_proxy()
        self._http_session = None
        self._initialized = False

    def _get_curl_requests(self):
        """Import curl_cffi lazily."""
        try:
            from curl_cffi import requests as curl_requests

            return curl_requests
        except ImportError:
            raise WebClientError("curl_cffi not installed: pip install curl_cffi")

    def _ensure_session(self) -> Any:
        """Get or create HTTP session with cookies."""
        if self._http_session is not None:
            return self._http_session

        curl_requests = self._get_curl_requests()
        self._http_session = curl_requests.Session(impersonate=self.IMPERSONATE)

        # Load cookies into session
        cookies, gib_headers = self._session_mgr.get_session_data()
        for name, value in cookies.items():
            self._http_session.cookies.set(name, value, domain=".hh.ru")

        # Set default headers
        self._http_session.headers.update(gib_headers)
        self._http_session.headers.update({
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "ru-RU,ru;q=0.9,en;q=0.8",
        })

        return self._http_session

    def _init_session(self) -> None:
        """Initialize session by visiting main page (required for GIB bypass)."""
        if self._initialized:
            return

        session = self._ensure_session()
        try:
            log.debug("Initializing session via hh.ru main page...")
            resp = session.get(
                "https://hh.ru/",
                allow_redirects=True,
                timeout=20,
                proxies={"https": self._proxy} if self._proxy else None,
            )
            # Detect subdomain from redirect
            if resp.url:
                self._session_mgr.detect_subdomain(str(resp.url))
            self._initialized = True
            log.debug("Session initialized, subdomain: %s", self._session_mgr.base_url)
        except Exception as e:
            log.warning("Session init failed: %s", e)

    def _throttle(self) -> None:
        """Ensure minimum interval between requests."""
        elapsed = time.time() - self._last_request_time
        if elapsed < self._min_request_interval:
            time.sleep(self._min_request_interval - elapsed)
        self._last_request_time = time.time()

    def request(
        self,
        method: str,
        url: str,
        *,
        data: dict | None = None,
        headers: dict | None = None,
        timeout: int | None = None,
        allow_redirects: bool = True,
        retry: bool = True,
    ) -> Any:
        """Make HTTP request with retry logic."""
        # Ensure session is initialized (visits main page for GIB bypass)
        self._init_session()
        session = self._ensure_session()

        # Build full URL
        if not url.startswith("http"):
            url = f"{self._session_mgr.base_url}{url}"

        # Merge extra headers
        req_headers = {}
        if headers:
            req_headers.update(headers)

        last_error = None
        attempts = self.RETRY_DELAYS if retry else [0]

        for delay in attempts:
            if delay > 0:
                log.debug("Retrying in %d seconds...", delay)
                time.sleep(delay)

            self._throttle()

            try:
                resp = session.request(
                    method,
                    url,
                    data=data,
                    headers=req_headers,
                    timeout=timeout or self.DEFAULT_TIMEOUT,
                    allow_redirects=allow_redirects,
                    proxies={"https": self._proxy} if self._proxy else None,
                )

                # Detect subdomain from redirects
                if resp.url and str(resp.url) != url:
                    self._session_mgr.detect_subdomain(str(resp.url))

                # Check for auth/GIB errors
                if resp.status_code == 403:
                    if "gib" in resp.text.lower() or "blocked" in resp.text.lower():
                        raise GIBBlockedError("Request blocked by GIB")
                    raise AuthRequiredError("403 Forbidden")

                if resp.status_code == 401:
                    raise AuthRequiredError("Authentication required")

                # Check for need-login in response body
                if '"type":"need-login"' in resp.text or '"needLogin"' in resp.text:
                    raise AuthRequiredError("Session expired - need-login")

                # Check for signup redirect (session expired)
                if "signup" in str(resp.url).lower() or "account/login" in str(resp.url).lower():
                    raise AuthRequiredError("Session expired - redirected to login")

                return resp

            except (GIBBlockedError, AuthRequiredError):
                raise
            except Exception as e:
                last_error = e
                log.warning("Request failed: %s", e)

        raise WebClientError(f"Request failed after retries: {last_error}")

    def get(self, url: str, **kwargs) -> Any:
        """Make GET request."""
        return self.request("GET", url, **kwargs)

    def post(self, url: str, data: dict | None = None, **kwargs) -> Any:
        """Make POST request."""
        return self.request("POST", url, data=data, **kwargs)

    def post_json(
        self,
        url: str,
        json_data: dict | None = None,
        headers: dict | None = None,
        **kwargs,
    ) -> Any:
        """Make POST request with JSON body."""
        import json

        self._init_session()
        session = self._ensure_session()

        if not url.startswith("http"):
            url = f"{self._session_mgr.base_url}{url}"

        req_headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
        if headers:
            req_headers.update(headers)

        self._throttle()

        try:
            resp = session.post(
                url,
                data=json.dumps(json_data) if json_data else None,
                headers=req_headers,
                timeout=kwargs.get("timeout", self.DEFAULT_TIMEOUT),
                allow_redirects=kwargs.get("allow_redirects", True),
                proxies={"https": self._proxy} if self._proxy else None,
            )

            if resp.status_code == 403:
                if "gib" in resp.text.lower() or "blocked" in resp.text.lower():
                    raise GIBBlockedError("Request blocked by GIB")
                raise AuthRequiredError("403 Forbidden")

            if resp.status_code == 401:
                raise AuthRequiredError("Authentication required")

            return resp

        except (GIBBlockedError, AuthRequiredError):
            raise
        except Exception as e:
            raise WebClientError(f"POST JSON failed: {e}")

    def post_multipart(
        self,
        url: str,
        data: dict,
        headers: dict | None = None,
    ) -> Any:
        """Make POST request with multipart/form-data."""
        import curl_cffi

        self._init_session()
        session = self._ensure_session()

        if not url.startswith("http"):
            url = f"{self._session_mgr.base_url}{url}"

        req_headers = {}
        if headers:
            req_headers.update(headers)

        self._throttle()

        # Build CurlMime for multipart
        mp = curl_cffi.CurlMime()
        for name, value in data.items():
            mp.addpart(name=name, data=str(value))

        try:
            resp = session.post(
                url,
                multipart=mp,
                headers=req_headers,
                timeout=self.DEFAULT_TIMEOUT,
                proxies={"https": self._proxy} if self._proxy else None,
            )
        finally:
            mp.close()

        if resp.status_code == 403:
            if "gib" in resp.text.lower() or "blocked" in resp.text.lower():
                raise GIBBlockedError("Request blocked by GIB")
            raise AuthRequiredError("403 Forbidden")

        return resp

    def get_vacancy_response_info(self, vacancy_id: str) -> dict:
        """Get vacancy response popup info."""
        resp = self.get(f"/applicant/vacancy_response/popup?vacancyId={vacancy_id}")

        if "json" in resp.headers.get("Content-Type", ""):
            return resp.json()

        return {"type": "html", "content": resp.text}

    def get_vacancy_form(self, vacancy_id: str) -> str:
        """Get vacancy response form HTML."""
        resp = self.get(
            f"/applicant/vacancy_response?vacancyId={vacancy_id}&startedWithQuestion=false"
        )
        return resp.text

    def submit_vacancy_response(
        self,
        vacancy_id: str,
        resume_hash: str,
        answers: dict[str, str],
        xsrf: str,
        uid_pk: str = "",
        guid: str = "",
        letter: str = "",
    ) -> dict:
        """Submit vacancy response with test answers.

        Uses multipart/form-data format as required by HH.ru.
        """
        import time
        import uuid

        # Generate guid if not provided
        if not guid:
            guid = str(uuid.uuid4()).upper()

        # Build multipart form data
        data = {
            "_xsrf": xsrf,
            "vacancy_id": vacancy_id,
            "resume_hash": resume_hash,
            "ignore_postponed": "true",
            "incomplete": "false",
            "mark_applicant_visible_in_vacancy_country": "false",
            "country_ids": "[]",
            "letter": letter or "Здравствуйте! Рассмотрите, пожалуйста, мою кандидатуру.",
            "lux": "true",
            "withoutTest": "no",
            "hhtmFromLabel": "",
            "hhtmSourceLabel": "",
            **answers,
        }

        # Add test-specific fields if uid_pk provided
        if uid_pk:
            data["uidPk"] = uid_pk
            data["guid"] = guid
            data["startTime"] = str(int(time.time()))
            data["testRequired"] = "true"

        headers = {
            "X-Xsrftoken": xsrf,
        }

        # Use multipart form data
        resp = self.post_multipart(
            "/applicant/vacancy_response/popup",
            data=data,
            headers=headers,
        )

        if "json" in resp.headers.get("Content-Type", ""):
            return resp.json()

        return {"status_code": resp.status_code, "text": resp.text[:500]}
