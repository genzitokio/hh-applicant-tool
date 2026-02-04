#!/usr/bin/env python3
"""
HR OSINT Tool - сбор информации о HR из Telegram
Использует session string для авторизации
"""

import asyncio
import csv
import os
from datetime import datetime
from telethon import TelegramClient
from telethon.sessions import StringSession
from telethon.tl.functions.channels import GetParticipantRequest
from telethon.tl.types import ChannelParticipant
from telethon.errors import UserNotParticipantError, ChatAdminRequiredError

# Credentials
API_ID = 28115037
API_HASH = "bd80e2c90a3daefddc03e41fd02090e8"
SESSION_STRING = "1ApWapzMBu1WZwKBKoku-Qw4k3jpgFOFGWow2uqp5C4z0xEozrmapDYHfvX2pk_PSSFok8BiIk5Eoe6x07PahMpAmGrE1rLKSslr3o1cM6SH3bZ5kJswmgzuKyi_o0HYOJ94sQAI36rdbXIi3_dA4f1CXOlpOC_4rNZ0S7V2cTSCRQBQf2TU09WZIiyEyfTpuIaP4KPfGbC6p66CgarWxJ6JDsJRmsraSFsquFGstpF-52rxwQKj1hoEAWy1E3GDFtoeRgbm3dj5weza3HT7WoeDyfNUl9ndaUqjjL7KTWDyexPh8VMl2modXzQPbbGs1E_ZF438eWTtnm6_ilkNI355HhjHV1k8="

# HR channels to check
HR_CHANNELS = [
    "itrecruitergroup",
    "ITHRchat",
    "ITrecruiters_community",
]


async def get_user_info(client, username_or_id):
    """Get detailed user info"""
    try:
        user = await client.get_entity(username_or_id)
        return {
            "id": user.id,
            "username": user.username or "",
            "first_name": user.first_name or "",
            "last_name": user.last_name or "",
            "phone": getattr(user, "phone", ""),
            "bio": getattr(user, "about", ""),
            "premium": getattr(user, "premium", False),
            "verified": getattr(user, "verified", False),
            "bot": getattr(user, "bot", False),
        }
    except Exception as e:
        return {"error": str(e)}


async def check_user_in_channel(client, user_id, channel):
    """Check if user is participant of channel"""
    try:
        channel_entity = await client.get_entity(channel)
        result = await client(GetParticipantRequest(channel_entity, user_id))
        return True
    except UserNotParticipantError:
        return False
    except ChatAdminRequiredError:
        return None  # Can't check
    except Exception as e:
        return None


async def count_user_messages(client, user_id, channel, limit=None):
    """Count user messages in channel"""
    try:
        channel_entity = await client.get_entity(channel)
        count = 0
        async for msg in client.iter_messages(channel_entity, from_user=user_id, limit=limit):
            count += 1
        return count
    except Exception as e:
        return -1


async def process_users(input_file, output_file, check_channels=True, count_messages=False):
    """Process list of users and gather OSINT data"""

    client = TelegramClient(StringSession(SESSION_STRING), API_ID, API_HASH)
    await client.connect()

    me = await client.get_me()
    print(f"Logged in as: {me.first_name} (@{me.username})")

    # Read input
    users = []
    with open(input_file, 'r') as f:
        reader = csv.DictReader(f)
        for row in reader:
            users.append(row)

    print(f"Processing {len(users)} users...")

    results = []
    for i, user in enumerate(users):
        user_id = user.get('id') or user.get('user_id')
        username = user.get('username', '')

        print(f"[{i+1}/{len(users)}] Processing {username or user_id}...")

        # Get user info
        identifier = username if username else int(user_id)
        info = await get_user_info(client, identifier)

        if "error" in info:
            print(f"  Error: {info['error']}")
            continue

        result = {
            **info,
            "original_messages_count": user.get('messages_count', ''),
            "original_sources": user.get('sources', ''),
        }

        # Check channel membership
        if check_channels:
            memberships = []
            for channel in HR_CHANNELS:
                is_member = await check_user_in_channel(client, info['id'], channel)
                if is_member:
                    memberships.append(channel)
                await asyncio.sleep(0.5)  # Rate limit
            result['current_memberships'] = ','.join(memberships)

        # Count messages
        if count_messages:
            msg_counts = []
            for channel in HR_CHANNELS:
                count = await count_user_messages(client, info['id'], channel)
                if count > 0:
                    msg_counts.append(f"{channel}:{count}")
                await asyncio.sleep(0.5)
            result['message_counts'] = ','.join(msg_counts)

        results.append(result)

        # Save incrementally
        if (i + 1) % 10 == 0:
            save_results(results, output_file)
            print(f"  Saved {len(results)} results")

        await asyncio.sleep(1)  # Rate limit between users

    await client.disconnect()

    # Final save
    save_results(results, output_file)
    print(f"\nDone! Saved {len(results)} results to {output_file}")

    return results


def save_results(results, output_file):
    """Save results to CSV"""
    if not results:
        return

    fieldnames = list(results[0].keys())
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(results)


async def main():
    import sys

    if len(sys.argv) < 2:
        print("Usage: python osint_hr.py <input.csv> [output.csv]")
        print("  Input CSV should have columns: id/user_id, username")
        return

    input_file = sys.argv[1]
    output_file = sys.argv[2] if len(sys.argv) > 2 else input_file.replace('.csv', '_osint.csv')

    await process_users(input_file, output_file, check_channels=True, count_messages=False)


if __name__ == "__main__":
    asyncio.run(main())
