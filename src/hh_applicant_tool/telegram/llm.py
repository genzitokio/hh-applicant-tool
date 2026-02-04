"""
AutoKus LLM — Claude API wrapper via z.ai
"""

import asyncio
import json
import logging
import os
import re
import time
from dataclasses import dataclass
from pathlib import Path
from typing import Optional

import httpx

from prompt import build_prompt

# Load .env
def load_dotenv(path: Path):
    if not path.exists():
        return
    with open(path) as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith('#'):
                continue
            if '=' in line:
                key, _, value = line.partition('=')
                os.environ.setdefault(key.strip(), value.strip())

load_dotenv(Path(__file__).parent / ".env")

# Config
API_KEY = os.getenv("ANTHROPIC_GLM_API_KEY", "")
API_BASE = "https://api.z.ai/api/anthropic"
MODEL = "glm-4.7"  # Best model available
TIMEOUT = 180  # seconds (3 minutes - z.ai is slow)

log = logging.getLogger("autokus.llm")


@dataclass
class LLMResponse:
    """Structured response from LLM"""
    response: str
    facts_update: dict
    action: str  # respond|escalate|wait
    escalate_reason: Optional[str]
    raw_text: str
    latency_ms: int


def parse_json_response(text: str) -> Optional[dict]:
    """
    Extract JSON from LLM response.
    Handles cases where LLM wraps JSON in markdown code blocks.
    """
    # Try direct parse first
    try:
        return json.loads(text.strip())
    except json.JSONDecodeError:
        pass

    # Try to extract from markdown code block
    patterns = [
        r'```json\s*([\s\S]*?)\s*```',
        r'```\s*([\s\S]*?)\s*```',
        r'\{[\s\S]*\}',
    ]

    for pattern in patterns:
        match = re.search(pattern, text)
        if match:
            try:
                json_str = match.group(1) if '```' in pattern else match.group(0)
                return json.loads(json_str.strip())
            except (json.JSONDecodeError, IndexError):
                continue

    return None


async def call_claude(prompt: str) -> tuple[str, int]:
    """
    Call Claude API via z.ai.
    Returns (response_text, latency_ms)
    """
    start = time.time()

    headers = {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
        "anthropic-version": "2023-06-01"
    }

    payload = {
        "model": MODEL,
        "max_tokens": 1024,
        "messages": [
            {"role": "user", "content": prompt}
        ]
    }

    async with httpx.AsyncClient(timeout=TIMEOUT) as client:
        response = await client.post(
            f"{API_BASE}/v1/messages",
            headers=headers,
            json=payload
        )
        response.raise_for_status()

    latency_ms = int((time.time() - start) * 1000)
    data = response.json()

    # Extract text from response
    text = ""
    for block in data.get("content", []):
        if block.get("type") == "text":
            text += block.get("text", "")

    return text, latency_ms


async def get_response(
    history: list[dict],
    new_message: str,
    facts: dict
) -> Optional[LLMResponse]:
    """
    Get response from LLM.

    Args:
        history: List of messages [{"role": "hr"|"me", "text": "..."}]
        new_message: The new message from HR
        facts: Current saved facts

    Returns:
        LLMResponse or None if failed
    """
    prompt = build_prompt(history, new_message, facts)

    try:
        raw_text, latency_ms = await call_claude(prompt)
        log.debug(f"LLM response ({latency_ms}ms): {raw_text[:200]}...")

        parsed = parse_json_response(raw_text)
        if not parsed:
            log.error(f"Failed to parse JSON from LLM: {raw_text[:500]}")
            return None

        # Validate required fields
        if "response" not in parsed:
            log.error(f"Missing 'response' in LLM output: {parsed}")
            return None

        return LLMResponse(
            response=parsed.get("response", ""),
            facts_update=parsed.get("facts_update", {}),
            action=parsed.get("action", "respond"),
            escalate_reason=parsed.get("escalate_reason"),
            raw_text=raw_text,
            latency_ms=latency_ms
        )

    except httpx.HTTPStatusError as e:
        log.error(f"HTTP error: {e.response.status_code} - {e.response.text}")
        return None
    except httpx.TimeoutException:
        log.error(f"Timeout after {TIMEOUT}s")
        return None
    except Exception as e:
        log.exception(f"LLM error: {e}")
        return None


async def get_response_with_retry(
    history: list[dict],
    new_message: str,
    facts: dict,
    max_retries: int = 3
) -> Optional[LLMResponse]:
    """Get response with exponential backoff retry"""
    for attempt in range(max_retries):
        result = await get_response(history, new_message, facts)
        if result:
            return result

        if attempt < max_retries - 1:
            wait_time = 2 ** attempt
            log.warning(f"Attempt {attempt + 1} failed, waiting {wait_time}s...")
            await asyncio.sleep(wait_time)

    return None


# Test
if __name__ == "__main__":
    logging.basicConfig(level=logging.DEBUG)

    async def test():
        result = await get_response(
            history=[],
            new_message="Привет! Есть интересная вакансия React-разработчика, рассматриваете?",
            facts={}
        )

        if result:
            print(f"\n{'='*50}")
            print(f"Response: {result.response}")
            print(f"Facts update: {result.facts_update}")
            print(f"Action: {result.action}")
            print(f"Escalate reason: {result.escalate_reason}")
            print(f"Latency: {result.latency_ms}ms")
        else:
            print("Failed to get response")

    asyncio.run(test())
