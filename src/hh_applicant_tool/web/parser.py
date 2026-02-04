"""Parser for HH.ru vacancy response forms with tests."""

from __future__ import annotations

import re
from dataclasses import dataclass, field
from logging import getLogger

log = getLogger(__name__)


@dataclass
class TestQuestion:
    """Single test question with options or free text."""

    field_name: str  # e.g. "task_123456_text" or "task_123456"
    question_text: str = ""
    question_type: str = "text"  # "text", "radio", "checkbox"
    options: list[tuple[str, str]] = field(default_factory=list)  # (value, label)

    def get_random_answer(self) -> str:
        """Get random answer value."""
        import random

        if self.options:
            return random.choice(self.options)[0]
        if self.question_type == "text":
            return "No answer provided"
        return ""

    def get_first_answer(self) -> str:
        """Get first answer value."""
        if self.options:
            return self.options[0][0]
        if self.question_type == "text":
            return "No answer provided"
        return ""

    # Legacy aliases
    @property
    def task_id(self) -> str:
        return self.field_name

    @property
    def text(self) -> str:
        return self.question_text


@dataclass
class VacancyForm:
    """Parsed vacancy response form."""

    vacancy_id: str
    xsrf: str = ""
    questions: list[TestQuestion] = field(default_factory=list)
    resume_hashes: list[str] = field(default_factory=list)
    hidden_fields: dict[str, str] = field(default_factory=dict)
    has_test: bool = False
    uid_pk: str = ""  # Test form identifier (min task_id - 1)
    already_applied: bool = False  # Detected from HTML when popup API misses it

    def generate_answers(self, strategy: str = "first") -> dict[str, str]:
        """Generate answers for all questions.

        Args:
            strategy: "first" - first option, "random" - random option
        """
        answers = {}
        for q in self.questions:
            if strategy == "random":
                answers[q.task_id] = q.get_random_answer()
            else:
                answers[q.task_id] = q.get_first_answer()
        return answers


class TestFormParser:
    """Parser for HH.ru vacancy test forms."""

    def parse(self, html: str, vacancy_id: str) -> VacancyForm:
        """Parse HTML form and extract test questions."""
        log.info("[PARSER] Starting parse for vacancy %s, HTML len=%d", vacancy_id, len(html))
        form = VacancyForm(vacancy_id=vacancy_id)

        # Extract XSRF token (multiple patterns)
        xsrf_patterns = [
            r'name="_xsrf"\s*value="([^"]+)"',
            r'value="([^"]+)"\s*name="_xsrf"',
            r'name="_xsrf"[^>]*value="([^"]+)"',
        ]
        for pattern in xsrf_patterns:
            xsrf_match = re.search(pattern, html)
            if xsrf_match:
                form.xsrf = xsrf_match.group(1)
                log.info("[PARSER] Found XSRF: %s...", form.xsrf[:20])
                break
        if not form.xsrf:
            log.warning("[PARSER] XSRF token NOT FOUND!")

        # Check if has test
        form.has_test = "task_" in html or "testRequired" in html
        log.info("[PARSER] has_test=%s (task_ in html: %s, testRequired: %s)",
                 form.has_test, "task_" in html, "testRequired" in html)

        # Extract hidden fields
        hidden_pattern = r'<input[^>]*type="hidden"[^>]*name="([^"]+)"[^>]*value="([^"]*)"'
        for name, value in re.findall(hidden_pattern, html):
            form.hidden_fields[name] = value
        log.info("[PARSER] Found %d hidden fields: %s", len(form.hidden_fields), list(form.hidden_fields.keys())[:10])

        # Parse textarea questions (task_*_text)
        log.info("[PARSER] Parsing textarea questions...")
        self._parse_textarea_questions(html, form)

        # Parse checkbox questions (task_* with type="checkbox")
        log.info("[PARSER] Parsing checkbox questions...")
        self._parse_checkbox_questions(html, form)

        # Parse radio button questions (task_*)
        log.info("[PARSER] Parsing radio questions...")
        self._parse_radio_questions(html, form)

        # Extract resume hashes from JSON in HTML
        resume_patterns = [
            r'"hash"\s*:\s*"([a-f0-9]{32,})"',
            r'name="resume_hash"[^>]*value="([^"]+)"',
            r'resume-hash="([^"]+)"',
        ]
        for pattern in resume_patterns:
            hashes = re.findall(pattern, html)
            if hashes:
                form.resume_hashes = list(set(hashes))
                log.info("[PARSER] Found %d resume hashes", len(form.resume_hashes))
                break

        # Calculate uid_pk from task IDs (min task_id - 1)
        if form.questions:
            task_ids = []
            for q in form.questions:
                # Extract numeric ID from field_name like "task_316992414_text"
                match = re.search(r"task_(\d+)", q.field_name)
                if match:
                    task_ids.append(int(match.group(1)))
            if task_ids:
                form.uid_pk = str(min(task_ids) - 1)
                log.info("[PARSER] Calculated uid_pk=%s from task_ids=%s", form.uid_pk, task_ids)

        log.info(
            "[PARSER] DONE: %d questions, %d resumes, has_test=%s, uid_pk=%s",
            len(form.questions),
            len(form.resume_hashes),
            form.has_test,
            form.uid_pk,
        )

        return form

    def _parse_textarea_questions(self, html: str, form: VacancyForm) -> None:
        """Parse textarea-based questions (task_*_text)."""
        # Find all textarea fields with task_*_text names
        textarea_pattern = r'<textarea[^>]*name="(task_\d+_text)"'
        textarea_fields = re.findall(textarea_pattern, html)
        log.info("[PARSER:textarea] Found %d textarea fields: %s", len(textarea_fields), textarea_fields)

        for field_name in textarea_fields:
            # Find question text near this textarea
            question_text = self._find_question_text_near(html, field_name)
            log.info("[PARSER:textarea] %s -> Q: '%s'", field_name, question_text[:80] if question_text else "(empty)")

            form.questions.append(
                TestQuestion(
                    field_name=field_name,
                    question_text=question_text,
                    question_type="text",
                    options=[],
                )
            )

    def _parse_checkbox_questions(self, html: str, form: VacancyForm) -> None:
        """Parse checkbox questions (task_* with type='checkbox')."""
        existing_task_ids = {q.field_name.replace("_text", "") for q in form.questions}

        # Match both name="task_*" and value patterns
        patterns = [
            r'<input[^>]*name="(task_\d+)"[^>]*type="checkbox"[^>]*value="([^"]*)"',
            r'<input[^>]*type="checkbox"[^>]*name="(task_\d+)"[^>]*value="([^"]*)"',
            r'<input[^>]*value="([^"]*)"[^>]*name="(task_\d+)"[^>]*type="checkbox"',
        ]

        task_options: dict[str, list[tuple[str, str]]] = {}

        for pattern in patterns:
            for match in re.finditer(pattern, html):
                groups = match.groups()
                # Handle different group orders
                if pattern.startswith(r'<input[^>]*value'):
                    value, task_id = groups
                else:
                    task_id, value = groups

                if task_id in existing_task_ids:
                    continue
                if task_id not in task_options:
                    task_options[task_id] = []

                # Avoid duplicate values
                if not any(v == value for v, _ in task_options[task_id]):
                    label = self._find_option_label(html, task_id, value)
                    task_options[task_id].append((value, label))

        log.info("[PARSER:checkbox] Found %d checkbox tasks: %s", len(task_options), list(task_options.keys()))
        for task_id, options in task_options.items():
            question_text = self._find_question_text_near(html, task_id)
            log.info("[PARSER:checkbox] %s -> Q: '%s', options: %s",
                     task_id, question_text[:60] if question_text else "(empty)", options)
            form.questions.append(
                TestQuestion(
                    field_name=task_id,
                    question_text=question_text,
                    question_type="checkbox",
                    options=options,
                )
            )
            # Add to existing to avoid radio parser picking it up
            existing_task_ids.add(task_id)

    def _parse_radio_questions(self, html: str, form: VacancyForm) -> None:
        """Parse radio button questions (task_* without _text suffix)."""
        # Find radio inputs - but skip if we already have textarea/checkbox for same task
        existing_task_ids = {q.field_name.replace("_text", "") for q in form.questions}

        patterns = [
            r'<input[^>]*name="(task_\d+)"[^>]*type="radio"[^>]*value="([^"]*)"',
            r'<input[^>]*type="radio"[^>]*name="(task_\d+)"[^>]*value="([^"]*)"',
        ]

        task_options: dict[str, list[tuple[str, str]]] = {}

        for pattern in patterns:
            for match in re.finditer(pattern, html):
                task_id, value = match.groups()
                if task_id in existing_task_ids:
                    continue
                if task_id not in task_options:
                    task_options[task_id] = []
                if not any(v == value for v, _ in task_options[task_id]):
                    label = self._find_option_label(html, task_id, value)
                    task_options[task_id].append((value, label))

        log.info("[PARSER:radio] Found %d radio tasks: %s", len(task_options), list(task_options.keys()))
        for task_id, options in task_options.items():
            question_text = self._find_question_text_near(html, task_id)
            log.info("[PARSER:radio] %s -> Q: '%s', options: %s",
                     task_id, question_text[:60] if question_text else "(empty)", options)
            form.questions.append(
                TestQuestion(
                    field_name=task_id,
                    question_text=question_text,
                    question_type="radio",
                    options=options,
                )
            )

    def _find_question_text_near(self, html: str, task_id: str) -> str:
        """Find question text near a task_id using multiple strategies."""
        # Extract numeric id
        match = re.search(r"task_(\d+)", task_id)
        if not match:
            return ""
        numeric_id = match.group(1)

        # Find position of this task in HTML
        task_pos = html.find(f'name="{task_id}"')
        if task_pos < 0:
            task_pos = html.find(task_id)
        if task_pos < 0:
            return ""

        # Look backwards for question text (extend range to 5000 chars)
        search_start = max(0, task_pos - 5000)
        chunk = html[search_start:task_pos]

        # Strategy 1: data-qa="task-question" (most reliable)
        # Note: task-question often contains <p> tags, so we need to extract text from inside
        question_matches = list(re.finditer(
            r'data-qa="task-question"[^>]*>(.*?)</div>',
            chunk,
            re.DOTALL
        ))
        if question_matches:
            # Extract text from HTML, stripping tags
            raw = question_matches[-1].group(1)
            text = re.sub(r'<[^>]+>', ' ', raw)  # Replace tags with space
            text = self._clean_html_text(text)
            # Remove common placeholder texts
            for placeholder in ["Писать тут", "Ответьте на вопросы", "Напишите здесь"]:
                text = text.replace(placeholder, "").strip()
            if text and len(text) > 5:
                return text

        # Strategy 2: Look for question in magritte-text or bloko-text spans
        text_patterns = [
            r'class="[^"]*magritte-text[^"]*"[^>]*>([^<]{10,500})<',
            r'class="[^"]*bloko-text[^"]*"[^>]*>([^<]{10,500})<',
            r'<p[^>]*>([^<]{10,500})</p>',
        ]
        for pattern in text_patterns:
            matches = list(re.finditer(pattern, chunk))
            if matches:
                # Take last match (closest to task)
                text = self._clean_html_text(matches[-1].group(1))
                # Filter out obvious non-questions
                if text and not text.startswith(("http", "www", "<")):
                    return text

        # Strategy 3: Look for any substantial text ending with ?
        question_mark_matches = list(re.finditer(r'>([^<]{15,300}\?)\s*<', chunk))
        if question_mark_matches:
            return self._clean_html_text(question_mark_matches[-1].group(1))

        # Strategy 4: Extract from placeholder if textarea
        if "_text" in task_id:
            placeholder_match = re.search(
                rf'name="{re.escape(task_id)}"[^>]*placeholder="([^"]+)"',
                html
            )
            if placeholder_match:
                return self._clean_html_text(placeholder_match.group(1))

        return ""

    def _find_question_text(self, html: str, task_id: str) -> str:
        """Try to find question text for a task (legacy method)."""
        # Try new method first
        text = self._find_question_text_near(html, task_id)
        if text:
            return text

        # Fallback to old patterns
        patterns = [
            rf'class="[^"]*question[^"]*"[^>]*>([^<]+)</[^>]*>.*?{task_id}',
            rf'<label[^>]*>([^<]+)</label>.*?{task_id}',
            rf'>([^<]{{20,200}})</[^>]*>\s*<[^>]*{task_id}',
        ]

        for pattern in patterns:
            match = re.search(pattern, html, re.DOTALL | re.IGNORECASE)
            if match:
                text = match.group(1).strip()
                text = self._clean_html_text(text)
                if len(text) > 10:
                    return text

        return ""

    def _find_option_label(self, html: str, task_id: str, value: str) -> str:
        """Try to find label text for a radio/checkbox option."""
        # Find position of this value in HTML
        value_pattern = rf'value="{re.escape(value)}"'
        match = re.search(value_pattern, html)
        if not match:
            return value

        # Look for cell-text-content after this value (within 2500 chars for complex markup)
        start_pos = match.end()
        chunk = html[start_pos:start_pos + 2500]

        # HH uses data-qa="cell-text-content" for option labels
        text_match = re.search(r'data-qa="cell-text-content"[^>]*>([^<]+)<', chunk)
        if text_match:
            return self._clean_html_text(text_match.group(1))

        # Fallback patterns
        patterns = [
            r'>([^<]{2,100})</span>',
            r'>([^<]{2,100})</div>',
        ]
        for pattern in patterns:
            m = re.search(pattern, chunk[:500])
            if m:
                text = self._clean_html_text(m.group(1))
                if text and len(text) > 1:
                    return text

        return value

    def _clean_html_text(self, text: str) -> str:
        """Clean HTML entities and extra whitespace."""
        import html

        text = html.unescape(text)
        text = re.sub(r"\s+", " ", text)
        return text.strip()
