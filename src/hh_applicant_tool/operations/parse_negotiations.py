"""Parse negotiations via mobile API (api.hh.ru)."""

from __future__ import annotations

import argparse
import json
import logging
import re
import time
from typing import TYPE_CHECKING, Any

from ..main import BaseNamespace, BaseOperation

if TYPE_CHECKING:
    from ..main import HHApplicantTool

logger = logging.getLogger(__name__)

# Contact patterns
PHONE_RE = re.compile(r'(\+7|8)[\s\-\(\)]*\d{3}[\s\-\(\)]*\d{3}[\s\-]*\d{2}[\s\-]*\d{2}')
TG_USERNAME_RE = re.compile(r'@([a-zA-Z][a-zA-Z0-9_]{4,})')
TG_LINK_RE = re.compile(r't\.me/([a-zA-Z0-9_]+)')
EMAIL_RE = re.compile(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')


def has_contact(text: str | None) -> bool:
    """Check if text contains potential contact info."""
    if not text:
        return False
    return bool(
        PHONE_RE.search(text) or
        TG_USERNAME_RE.search(text) or
        TG_LINK_RE.search(text) or
        EMAIL_RE.search(text)
    )


class Namespace(BaseNamespace):
    output: str | None
    only_contacts: bool
    limit: int


class Operation(BaseOperation):
    """Parse negotiations via mobile API (api.hh.ru/negotiations)."""

    __aliases__ = ("negotiations", "parse-neg")

    def setup_parser(self, parser: argparse.ArgumentParser) -> None:
        parser.add_argument(
            "-o", "--output",
            help="Output JSON file path (stdout if not specified)",
            type=str,
            default=None,
        )
        parser.add_argument(
            "-l", "--limit",
            help="Max number of negotiations to fetch (0 = all)",
            type=int,
            default=0,
        )
        parser.add_argument(
            "--only-contacts",
            help="Only include negotiations with potential contacts",
            action="store_true",
            default=False,
        )

    def run(self, tool: HHApplicantTool) -> int | None:
        args: Namespace = tool.args
        self.tool = tool
        self.api = tool.api_client

        try:
            result = self._parse_negotiations(
                limit=args.limit,
                only_contacts=args.only_contacts,
            )
        except Exception as e:
            logger.error("API error: %s", e)
            return 1

        output_json = json.dumps(result, ensure_ascii=False, indent=2)

        if args.output:
            with open(args.output, "w", encoding="utf-8") as f:
                f.write(output_json)
            logger.info("Saved %d negotiations to %s", len(result["chats"]), args.output)
        else:
            print(output_json)

        return 0

    def _api_get_with_retry(self, endpoint: str, max_retries: int = 3, **kwargs) -> dict[str, Any]:
        """API GET with retry on connection errors."""
        for attempt in range(max_retries):
            try:
                return self.api.get(endpoint, **kwargs) or {}
            except Exception as e:
                if attempt < max_retries - 1:
                    wait = 2 ** attempt  # 1, 2, 4 sec
                    logger.warning("Retry %d/%d for %s: %s (wait %ds)",
                                   attempt + 1, max_retries, endpoint, e, wait)
                    time.sleep(wait)
                else:
                    raise

    def _get_negotiations_page(self, page: int) -> dict[str, Any]:
        """Get one page of negotiations."""
        return self._api_get_with_retry("/negotiations", page=page, per_page=100)

    def _get_messages(self, negotiation_id: str) -> list[dict]:
        """Get all messages for a negotiation."""
        messages = []
        page = 0

        while True:
            data = self._api_get_with_retry(
                f"/negotiations/{negotiation_id}/messages",
                page=page,
            )

            items = data.get("items", [])
            if not items:
                break

            messages.extend(items)

            # Пагинация по pages, не по found
            total_pages = data.get("pages", 1)
            if page + 1 >= total_pages:
                break

            page += 1
            # НЕ нужен sleep — ApiClient.get() уже имеет throttle 0.345s

        return messages

    def _parse_negotiations(
        self,
        limit: int = 0,
        only_contacts: bool = False,
    ) -> dict[str, Any]:
        """Main parsing logic."""
        all_negotiations = []
        page = 0

        # Fetch all negotiations
        while True:
            logger.info("Fetching negotiations page %d...", page)
            data = self._get_negotiations_page(page)

            items = data.get("items", [])
            if not items:
                break

            all_negotiations.extend(items)

            total = data.get("found", 0)
            logger.info("Got %d/%d negotiations", len(all_negotiations), total)

            if limit > 0 and len(all_negotiations) >= limit:
                all_negotiations = all_negotiations[:limit]
                break

            if len(all_negotiations) >= total:
                break

            page += 1
            # НЕ нужен дополнительный sleep — ApiClient уже throttled (0.345s)

        logger.info("Total negotiations: %d", len(all_negotiations))

        # Process each negotiation
        result_chats = []
        for i, neg in enumerate(all_negotiations):
            neg_id = neg.get("id")
            if not neg_id:
                continue

            vacancy = neg.get("vacancy", {})
            employer = vacancy.get("employer", {})

            # Pre-filter: check if any message might have contacts
            # Skip fetching full messages if only_contacts and no hint of contacts
            if only_contacts:
                # Quick check - we'll verify after fetching messages
                pass

            logger.debug("Fetching messages for %s (%d/%d)", neg_id, i + 1, len(all_negotiations))
            # НЕ нужен дополнительный sleep — ApiClient уже throttled (0.345s)
            messages = self._get_messages(neg_id)

            # Extract employer messages text
            employer_texts = []
            for msg in messages:
                author_type = msg.get("author", {}).get("participant_type", "")
                if author_type == "employer":
                    text = msg.get("text") or ""
                    employer_texts.append(text)

            all_employer_text = "\n".join(employer_texts)

            # Filter by contacts
            if only_contacts and not has_contact(all_employer_text):
                continue

            # Build result
            chat_result = {
                "id": neg.get("chat_id") or neg_id,
                "negotiation_id": neg_id,
                "state": neg.get("state", {}).get("name"),
                "vacancy": {
                    "id": vacancy.get("id"),
                    "name": vacancy.get("name"),
                    "url": vacancy.get("alternate_url"),
                } if vacancy else None,
                "employer": {
                    "id": employer.get("id"),
                    "name": employer.get("name"),
                } if employer else None,
                "messages": [
                    {
                        "id": msg.get("id"),
                        "text": msg.get("text"),
                        "author": msg.get("author", {}).get("participant_type"),
                        "time": msg.get("created_at"),
                    }
                    for msg in messages
                ],
            }

            result_chats.append(chat_result)

            if (i + 1) % 50 == 0:
                logger.info("Processed %d/%d negotiations", i + 1, len(all_negotiations))

        return {
            "profile": self.tool.config_path.name,
            "total_chats": len(result_chats),
            "chats": result_chats,
        }
