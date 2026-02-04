"""Parse chats via Chatik API."""

from __future__ import annotations

import argparse
import json
import logging
import re
import time
from typing import TYPE_CHECKING, Any

from ..main import BaseNamespace, BaseOperation
from ..web import SessionManager, WebClient, WebClientError

if TYPE_CHECKING:
    from ..main import HHApplicantTool

logger = logging.getLogger(__name__)

# Patterns for contact detection
CONTACT_PATTERNS = [
    re.compile(r'(\+7|8)[\s\-\(\)]*\d{3}[\s\-\(\)]*\d{3}[\s\-]*\d{2}[\s\-]*\d{2}'),  # phone
    re.compile(r'@[a-zA-Z][a-zA-Z0-9_]{2,}'),  # telegram @username
    re.compile(r't\.me/[a-zA-Z0-9_+\-]+'),  # telegram link
    re.compile(r'(?:telegram|tg)\s*[-:.]?\s*@?[a-zA-Z][a-zA-Z0-9_]{2,}', re.IGNORECASE),  # telegram mention
    re.compile(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'),  # email
    re.compile(r'whatsapp|viber', re.IGNORECASE),  # messengers
]


def has_contact(text: str | None) -> bool:
    """Check if text contains potential contact info."""
    if not text:
        return False
    return any(p.search(text) for p in CONTACT_PATTERNS)


class Namespace(BaseNamespace):
    output: str | None
    only_unread: bool
    only_invitations: bool
    only_contacts: bool
    fast: bool
    limit: int


class Operation(BaseOperation):
    """Parses chats via Chatik API (chatik.hh.ru)."""

    __aliases__ = ("chats", "parse-dialogs")

    CHATIK_BASE = "https://chatik.hh.ru/chatik/api"

    def setup_parser(self, parser: argparse.ArgumentParser) -> None:
        parser.add_argument(
            "-o",
            "--output",
            help="Output JSON file path (stdout if not specified)",
            type=str,
            default=None,
        )
        parser.add_argument(
            "--only-unread",
            help="Only fetch unread chats",
            action="store_true",
            default=False,
        )
        parser.add_argument(
            "--only-invitations",
            help="Only fetch invitation chats (type=NEGOTIATION with invitation state)",
            action="store_true",
            default=False,
        )
        parser.add_argument(
            "-l",
            "--limit",
            help="Max number of chats to fetch (0 = all)",
            type=int,
            default=0,
        )
        parser.add_argument(
            "--only-contacts",
            help="Only include chats with potential contacts (phone, email, telegram)",
            action="store_true",
            default=False,
        )
        parser.add_argument(
            "--fast",
            help="Fast mode: use lastMessage from list, don't fetch full chat data",
            action="store_true",
            default=False,
        )

    def run(self, tool: HHApplicantTool) -> int | None:
        args: Namespace = tool.args
        self.tool = tool

        # Create web client with session from profile
        session_mgr = SessionManager(tool.config)
        cookies, gib_headers = session_mgr.get_session_data()

        if not session_mgr.is_valid():
            logger.error(
                "Session invalid. Run 'hh-applicant-tool authorize' first."
            )
            return 1

        self.xsrf = cookies.get("_xsrf", "")
        if not self.xsrf:
            logger.warning("No _xsrf cookie found, requests may fail")

        self.web_client = WebClient(session_mgr)

        try:
            result = self._parse_chats(
                only_unread=args.only_unread,
                only_invitations=args.only_invitations,
                only_contacts=args.only_contacts,
                fast=args.fast,
                limit=args.limit,
            )
        except WebClientError as e:
            logger.error("Web client error: %s", e)
            return 1

        # Output
        output_json = json.dumps(result, ensure_ascii=False, indent=2)

        if args.output:
            with open(args.output, "w", encoding="utf-8") as f:
                f.write(output_json)
            logger.info("Saved %d chats to %s", len(result["chats"]), args.output)
        else:
            print(output_json)

        return 0

    def _chatik_headers(self) -> dict[str, str]:
        """Headers required for Chatik API."""
        return {
            "x-xsrftoken": self.xsrf,
            "x-hhtmsource": "app",
            "x-requested-with": "XMLHttpRequest",
            "accept": "application/json",
        }

    def _chatik_get(self, endpoint: str, **params) -> dict[str, Any]:
        """GET request to Chatik API."""
        query = "&".join(f"{k}={v}" for k, v in params.items() if v is not None)
        url = f"{self.CHATIK_BASE}/{endpoint}"
        if query:
            url = f"{url}?{query}"

        resp = self.web_client.get(url, headers=self._chatik_headers())

        if resp.status_code != 200:
            logger.warning("Chatik %s returned %d", endpoint, resp.status_code)
            return {}

        try:
            return resp.json()
        except Exception:
            logger.warning("Failed to parse JSON from %s", endpoint)
            return {}

    def _get_chats_list(
        self,
        filter_unread: bool = False,
        limit: int = 0,
    ) -> list[dict]:
        """Get list of all chats with pagination."""
        all_items = []
        page = 0

        while True:
            data = self._chatik_get(
                "chats",
                filterUnread=str(filter_unread).lower(),
                filterHasTextMessage="false",
                page=page,
            )

            chats_data = data.get("chats", {})
            items = chats_data.get("items", [])

            if not items:
                break

            all_items.extend(items)

            # Check limit
            if limit > 0 and len(all_items) >= limit:
                all_items = all_items[:limit]
                break

            # Check pagination
            has_next = chats_data.get("hasNextPage", False)
            total_pages = chats_data.get("pages", 1)

            if not has_next or page + 1 >= total_pages:
                break

            page += 1
            logger.debug("Fetching page %d/%d (%d chats so far)", page + 1, total_pages, len(all_items))
            time.sleep(0.5)  # Rate limit

        return all_items

    def _get_chat_data(self, chat_id: int) -> dict[str, Any]:
        """Get full chat data with messages."""
        data = self._chatik_get(
            "chat_data",
            chatId=chat_id,
            applicantId=0,  # Ignored by server
            do_not_track_session_events="false",
        )
        return data

    def _parse_chats(
        self,
        only_unread: bool = False,
        only_invitations: bool = False,
        only_contacts: bool = False,
        fast: bool = False,
        limit: int = 0,
    ) -> dict[str, Any]:
        """Main parsing logic."""
        chats_list = self._get_chats_list(filter_unread=only_unread, limit=limit)
        logger.info("Found %d chats", len(chats_list))

        result_chats = []

        for chat_meta in chats_list:
            chat_id = chat_meta.get("id")
            chat_type = chat_meta.get("type")

            if not chat_id:
                continue

            # Filter invitations if needed
            if only_invitations and chat_type != "NEGOTIATION":
                continue

            # Extract lastMessage from list response
            last_msg = chat_meta.get("lastMessage", {})
            last_msg_text = last_msg.get("text", "")
            last_msg_display = last_msg.get("participantDisplay", {})

            # Filter by contacts in lastMessage (fast pre-filter)
            if only_contacts and not has_contact(last_msg_text):
                continue

            # Build chat result
            chat_result = {
                "id": chat_id,
                "type": chat_type,
                "unread_count": chat_meta.get("unreadCount", 0),
                "write_possibility": chat_meta.get("writePossibility", {}).get("name"),
                "vacancy": None,
                "employer": None,
                "messages": [],
            }

            if fast:
                # Fast mode: only use lastMessage, no API call per chat
                if last_msg_text:
                    chat_result["messages"] = [{
                        "id": last_msg.get("id"),
                        "text": last_msg_text,
                        "type": last_msg.get("type"),
                        "time": last_msg.get("creationTime"),
                        "author": last_msg_display.get("type", "unknown"),
                        "author_name": last_msg_display.get("name"),
                    }]
            else:
                # Full mode: fetch all messages
                logger.debug("Fetching chat %d", chat_id)
                time.sleep(1.5)  # Rate limit between chat requests
                chat_data = self._get_chat_data(chat_id)

                if not chat_data:
                    continue

                chat = chat_data.get("chat", {})
                resources = chat_data.get("resources", {})

                # Extract messages
                for msg in chat.get("messages", {}).get("items", []):
                    participant_id = msg.get("participantId")
                    participant = resources.get("participants", {}).get(
                        str(participant_id), {}
                    )

                    chat_result["messages"].append({
                        "id": msg.get("id"),
                        "text": msg.get("text"),
                        "type": msg.get("type"),
                        "time": msg.get("creationTime"),
                        "author": participant.get("type", "unknown"),
                        "author_name": participant.get("name"),
                        "can_edit": msg.get("canEdit"),
                        "can_delete": msg.get("canDelete"),
                    })

                # Extract vacancy/employer from resources
                vacancies = resources.get("vacancies", {})
                vacancy = list(vacancies.values())[0] if vacancies else {}

                employers = resources.get("employers", {})
                employer = list(employers.values())[0] if employers else {}

                if vacancy:
                    chat_result["vacancy"] = {
                        "id": vacancy.get("id"),
                        "name": vacancy.get("name"),
                        "url": vacancy.get("url"),
                    }
                if employer:
                    chat_result["employer"] = {
                        "id": employer.get("id"),
                        "name": employer.get("name"),
                    }

            result_chats.append(chat_result)

        return {
            "profile": self.tool.config_path.name,
            "total_chats": len(result_chats),
            "chats": result_chats,
        }
