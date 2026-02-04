#!/usr/bin/env python3
"""
Parse bios for all HR contacts
"""

import asyncio
import csv
import sys
from telethon import TelegramClient
from telethon.sessions import StringSession
from telethon.tl.functions.users import GetFullUserRequest
from telethon.errors import FloodWaitError, UserNotMutualContactError

API_ID = 28115037
API_HASH = "bd80e2c90a3daefddc03e41fd02090e8"
SESSION_STRING = "1ApWapzMBu1WZwKBKoku-Qw4k3jpgFOFGWow2uqp5C4z0xEozrmapDYHfvX2pk_PSSFok8BiIk5Eoe6x07PahMpAmGrE1rLKSslr3o1cM6SH3bZ5kJswmgzuKyi_o0HYOJ94sQAI36rdbXIi3_dA4f1CXOlpOC_4rNZ0S7V2cTSCRQBQf2TU09WZIiyEyfTpuIaP4KPfGbC6p66CgarWxJ6JDsJRmsraSFsquFGstpF-52rxwQKj1hoEAWy1E3GDFtoeRgbm3dj5weza3HT7WoeDyfNUl9ndaUqjjL7KTWDyexPh8VMl2modXzQPbbGs1E_ZF438eWTtnm6_ilkNI355HhjHV1k8="


async def get_user_bio(client, identifier):
    """Get full user info including bio"""
    try:
        full = await asyncio.wait_for(client(GetFullUserRequest(identifier)), timeout=10)
        user = full.users[0]
        return {
            "id": user.id,
            "username": user.username or "",
            "first_name": user.first_name or "",
            "last_name": user.last_name or "",
            "bio": (full.full_user.about or "").replace("\n", " ").strip(),
            "premium": user.premium or False,
            "common_chats": full.full_user.common_chats_count or 0,
        }
    except FloodWaitError as e:
        print(f"  FloodWait: {e.seconds}s")
        await asyncio.sleep(e.seconds + 1)
        return await get_user_bio(client, identifier)
    except Exception as e:
        return {"error": str(e)}


async def main(input_file, output_file, start_from=0):
    client = TelegramClient(StringSession(SESSION_STRING), API_ID, API_HASH)
    await client.connect()

    me = await client.get_me()
    print(f"Logged in as: @{me.username}")

    # Read input
    users = []
    with open(input_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            users.append(row)

    print(f"Total users: {len(users)}, starting from {start_from}")

    results = []
    errors = 0

    for i, user in enumerate(users[start_from:], start=start_from):
        username = user.get('username', '')
        user_id = user.get('id', '')

        if not username:
            # Try by ID
            if user_id:
                identifier = int(user_id)
            else:
                continue
        else:
            identifier = username

        print(f"[{i+1}/{len(users)}] {identifier}...", end=" ", flush=True)

        info = await get_user_bio(client, identifier)

        if "error" in info:
            print(f"ERR: {info['error'][:50]}")
            errors += 1
            if errors > 20:
                print("Too many errors, stopping")
                break
        else:
            bio_preview = info['bio'][:40] + "..." if len(info['bio']) > 40 else info['bio']
            print(f"OK - {bio_preview or 'no bio'}")
            results.append(info)
            errors = 0  # Reset error counter on success

        # Save every 50
        if (i + 1) % 50 == 0:
            save_results(results, output_file)
            print(f"  === Saved {len(results)} results ===")

        await asyncio.sleep(0.3)  # Rate limit - faster

    await client.disconnect()

    save_results(results, output_file)
    print(f"\nDone! Saved {len(results)} results to {output_file}")


def save_results(results, output_file):
    if not results:
        return
    fieldnames = ["id", "username", "first_name", "last_name", "bio", "premium", "common_chats"]
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(results)


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python parse_bios.py <input.csv> [output.csv] [start_from]")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2] if len(sys.argv) > 2 else "hr_with_bios.csv"
    start_from = int(sys.argv[3]) if len(sys.argv) > 3 else 0

    asyncio.run(main(input_file, output_file, start_from))
