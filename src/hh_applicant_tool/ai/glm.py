"""LLM integration for test answers (OpenAI-compatible API)."""

import logging
from dataclasses import KW_ONLY, dataclass

from .base import AIError

logger = logging.getLogger(__name__)

# Local CLIProxyAPI - supports Claude, Gemini, GLM
DEFAULT_ENDPOINT = "http://127.0.0.1:8317/v1/chat/completions"
DEFAULT_API_KEY = "sk-flyingkuskus-proxy-2026"
DEFAULT_MODEL = "gemini-3-flash-preview"


class GLMError(AIError):
    pass


@dataclass
class ChatGLM:
    """OpenAI-compatible chat client for local proxy."""

    token: str = DEFAULT_API_KEY
    _: KW_ONLY
    system_prompt: str | None = None
    timeout: float = 60.0
    temperature: float = 0.7
    max_tokens: int = 500
    model: str = DEFAULT_MODEL
    completion_endpoint: str = DEFAULT_ENDPOINT
    proxy: str | None = None  # Not needed for local proxy

    def _default_headers(self) -> dict[str, str]:
        return {
            "Authorization": f"Bearer {self.token}",
            "Content-Type": "application/json",
        }

    def send_message(self, message: str, retries: int = 2) -> str:
        """Send message and get response."""
        import time
        import requests

        messages = []
        if self.system_prompt:
            messages.append({"role": "system", "content": self.system_prompt})
        messages.append({"role": "user", "content": message})

        payload = {
            "model": self.model,
            "messages": messages,
            "temperature": self.temperature,
            "max_tokens": self.max_tokens,
        }

        last_error = None
        for attempt in range(retries):
            try:
                response = requests.post(
                    self.completion_endpoint,
                    json=payload,
                    headers=self._default_headers(),
                    timeout=self.timeout,
                )

                if response.status_code != 200:
                    raise GLMError(f"HTTP {response.status_code}: {response.text[:200]}")

                data = response.json()
                if "error" in data:
                    raise GLMError(data["error"].get("message", str(data["error"])))

                content = data["choices"][0]["message"].get("content", "")
                return content.strip()

            except GLMError:
                raise
            except Exception as ex:
                last_error = ex
                if attempt < retries - 1:
                    logger.debug("Request failed, retrying... (%d/%d): %s", attempt + 1, retries, ex)
                    time.sleep(0.5)
                    continue

        raise GLMError(f"Request error after {retries} attempts: {last_error}") from last_error


def create_test_answer_generator(api_key: str | None = None, proxy: str | None = None, use_ai: bool = True) -> callable:
    """Create answer generator for test questions.

    Args:
        api_key: API key (uses local proxy default if None)
        proxy: Not used (local proxy doesn't need it)
        use_ai: Use AI for answers. Default: True (Gemini 3 Flash via local proxy)
    """

    # Smart template answers - instant
    TEMPLATES = {
        "salary": "Рассматриваю предложения от 300 000 рублей, готов обсудить по результатам собеседования.",
        "experience_years": "Более 6 лет коммерческой разработки в продуктовых компаниях.",
        "experience_story": "Да, имею подобный опыт. Работал над аналогичными задачами в предыдущих проектах.",
        "relocation": "Предпочитаю удаленный формат, готов к редким визитам в офис.",
        "office": "Да, готов рассмотреть офисный/гибридный формат.",
        "stack": "Да, имею релевантный опыт работы с указанным стеком технологий.",
        "tech_question": "Использую стандартные подходы и best practices. Готов обсудить детали на техническом интервью.",
        "start": "Готов приступить в течение 2 недель после оффера.",
        "location": "Да, проживаю в России (Москва).",
        "citizenship": "Гражданин РФ.",
        "yes_no": "Да.",
        "default": "Да, готов. Детали обсудим на собеседовании.",
    }

    def _is_yes_no_question(q: str) -> bool:
        """Check if question expects yes/no answer."""
        # Questions ending with specific patterns
        yes_no_patterns = [
            "подтвержд",  # подтвержден, подтверждаете
            "согласн",    # согласны, согласен
            "готов",      # готовы, готов ли
            "устраива",   # устраивает
            "интересн",   # интересно, интересна
            "рассматрива",# рассматриваете
            "имеет",      # имеете ли
            "есть ли",
            "владеете",
            "знаком",     # знакомы
            "работали ли",
            "можете ли",
        ]
        return any(p in q for p in yes_no_patterns)

    def _get_template(question_text: str) -> str:
        """Get template answer based on keywords."""
        q = question_text.lower()

        # FIRST: Check topic-specific keywords (these override yes/no detection)
        # Salary keywords (with stems for Russian morphology)
        if any(w in q for w in ["зарплат", "заработн", "оклад", "доход", "оплат", "вилк", "ожидани", "уровень дохода", "финансов"]):
            return TEMPLATES["salary"]

        # Location keywords
        if any(w in q for w in ["проживает", "находитесь", "территори", "живете", "регион", "город", "локаци"]):
            return TEMPLATES["location"]

        # Citizenship keywords
        if any(w in q for w in ["гражданств", "паспорт", "рф", "россий"]):
            return TEMPLATES["citizenship"]

        # Experience years - only for "how many years" type questions
        if any(w in q for w in ["сколько лет", "стаж работы", "общий стаж", "лет опыта", "опыт работы с"]):
            return TEMPLATES["experience_years"]

        # Technical "how to" questions
        if q.startswith("как ") or any(w in q for w in ["каким образом", "какие подходы", "опишите как"]):
            return TEMPLATES["tech_question"]

        # THEN: Check if it's a yes/no question (after topic checks)
        if _is_yes_no_question(q):
            return TEMPLATES["yes_no"]

        # Relocation/remote
        if any(w in q for w in ["переезд", "релокаци", "удален", "remote", "дистанц"]):
            return TEMPLATES["relocation"]

        # Office work
        if any(w in q for w in ["офис", "гибрид", "очно", "присутств"]):
            return TEMPLATES["office"]

        # Tech stack - specific technologies
        if any(w in q for w in ["стек", "технолог", "react", "vue", "angular", "python", "java", "php", "node", "typescript", "javascript"]):
            return TEMPLATES["stack"]

        # Technical "how to" questions
        if any(w in q for w in ["как ", "каким образом", "какие подходы", "расскажите", "опишите"]):
            return TEMPLATES["tech_question"]

        # Experience story questions (not about years)
        if any(w in q for w in ["приходилось", "был опыт", "работали с", "делали ли"]):
            return TEMPLATES["experience_story"]

        # Start date
        if any(w in q for w in ["приступить", "выход на работу", "начать работу", "когда готов", "срок выхода"]):
            return TEMPLATES["start"]

        return TEMPLATES["default"]

    def _pick_positive_option(options: list[tuple[str, str]]) -> str:
        """Pick positive option (Да/Готов) or first."""
        for value, label in options:
            label_lower = label.lower()
            if any(w in label_lower for w in ["да", "готов", "интересно", "согласен", "подходит"]):
                return value
        return options[0][0]

    # AI mode - slow but smart
    chat = None
    if use_ai:
        chat = ChatGLM(
            token=api_key or DEFAULT_API_KEY,
            system_prompt=(
                "Ты Senior разработчик с 6+ лет опыта, ищешь работу. "
                "Отвечай от первого лица, кратко (1-2 предложения). "
                "Зарплатные ожидания: от 300000 руб. "
                "Локация: Москва, предпочитаю удаленку но готов в офис. "
                "Стек: Python, TypeScript, React, PostgreSQL, Docker. "
                "НЕ пиши [сумма], [ваш ответ] - пиши конкретно."
            ),
            temperature=0.3,
            max_tokens=200,
            proxy=proxy,
        )

    def generate_answers(questions: list) -> dict[str, str]:
        """Generate answers for test questions."""
        logger.info("[ANSWERS] Generating for %d questions (AI=%s)", len(questions), use_ai)
        answers = {}

        for i, q in enumerate(questions, 1):
            logger.info("[ANSWERS] Q%d: [%s] %s", i, q.question_type, q.field_name)

            if q.question_type == "text":
                if use_ai and chat and q.question_text and len(q.question_text) > 10:
                    try:
                        response = chat.send_message(f"Вопрос: {q.question_text}\nОтвет:")
                        if response and len(response.strip()) > 5:
                            answers[q.field_name] = response.strip()
                            logger.info("[ANSWERS] Q%d -> AI: %s", i, response[:60])
                            continue
                    except GLMError as e:
                        logger.warning("[ANSWERS] Q%d AI error: %s", i, e)

                # Template fallback
                answers[q.field_name] = _get_template(q.question_text or "")
                logger.info("[ANSWERS] Q%d -> TEMPLATE: %s", i, answers[q.field_name][:50])

            elif q.options:
                # Multiple choice - pick positive or first
                answers[q.field_name] = _pick_positive_option(q.options)
                logger.info("[ANSWERS] Q%d -> OPTION: %s", i, answers[q.field_name])

        logger.info("[ANSWERS] DONE: %d answers", len(answers))
        return answers

    return generate_answers
