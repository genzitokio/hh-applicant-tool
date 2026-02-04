"""Session manager for GIB tokens and Chrome cookies."""

from __future__ import annotations

import json
import subprocess
from logging import getLogger
from pathlib import Path
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from ..utils.config import Config

log = getLogger(__name__)


class SessionManager:
    """Manages GIB tokens and Chrome cookies for web requests."""

    GIB_CACHE_FILENAME = "gib_cache.json"
    COOKIES_CACHE_FILENAME = "web_cookies.json"
    DEFAULT_CHROME_PROFILE = "Profile 1"  # Бургио

    def __init__(
        self,
        config: Config,
        chrome_profile: str | None = None,
    ):
        self._config = config
        self._chrome_profile = chrome_profile or self.DEFAULT_CHROME_PROFILE
        self._cookies: dict[str, str] = {}
        self._gib_headers: dict[str, str] = {}
        self._subdomain: str | None = None

    @property
    def config_dir(self) -> Path:
        return self._config._config_path.parent

    def get_proxy(self) -> str | None:
        """Get proxy URL from config."""
        proxy_config = self._config.get("proxy")
        if proxy_config:
            return proxy_config.get("https") or proxy_config.get("http")
        return None

    @property
    def gib_cache_path(self) -> Path:
        return self.config_dir / self.GIB_CACHE_FILENAME

    @property
    def chrome_cookies_path(self) -> Path:
        return (
            Path.home()
            / ".config"
            / "google-chrome"
            / self._chrome_profile
            / "Cookies"
        )

    def _is_chrome_running(self) -> bool:
        """Check if Chrome browser is currently running."""
        try:
            result = subprocess.run(
                ["pgrep", "-x", "chrome"],
                capture_output=True,
                timeout=5,
            )
            return result.returncode == 0
        except Exception:
            return False

    @property
    def cookies_cache_path(self) -> Path:
        return self.config_dir / self.COOKIES_CACHE_FILENAME

    def load_cookies(self) -> dict[str, str]:
        """Load cookies from cache (authorize) or Chrome browser.

        Priority:
        1. Cached cookies from authorize command
        2. browser-cookie3 for specific profile support
        3. rookiepy as fallback (can bypass Chrome locking)
        """
        # 1. Try cached cookies from authorize first
        if self.cookies_cache_path.exists():
            try:
                with open(self.cookies_cache_path) as f:
                    self._cookies = json.load(f)
                if self._cookies.get("hhtoken"):
                    log.debug(
                        "Loaded %d cookies from cache (authorize)",
                        len(self._cookies),
                    )
                    if "hhrole" in self._cookies:
                        log.debug("hhrole: %s", self._cookies.get("hhrole"))
                    return self._cookies
            except Exception as e:
                log.warning("Failed to load cookies cache: %s", e)

        # 2. Try browser-cookie3 - supports specific profile
        try:
            import browser_cookie3

            cj = browser_cookie3.chrome(
                cookie_file=str(self.chrome_cookies_path),
                domain_name="hh.ru",
            )
            self._cookies = {c.name: c.value for c in cj}
            log.debug(
                "Loaded %d cookies via browser-cookie3 from %s",
                len(self._cookies),
                self._chrome_profile,
            )

            if "hhrole" in self._cookies:
                log.debug("hhrole: %s", self._cookies.get("hhrole"))

            return self._cookies

        except PermissionError:
            # Chrome is running and has locked the cookie file
            log.debug("Cookie file locked, trying rookiepy")
        except ImportError:
            log.debug("browser-cookie3 not available, trying rookiepy")
        except Exception as e:
            log.warning("browser-cookie3 failed: %s, trying rookiepy", e)

        # Fallback to rookiepy - can bypass Chrome locking but reads all profiles
        try:
            import rookiepy

            if self._chrome_profile != self.DEFAULT_CHROME_PROFILE:
                log.warning(
                    "rookiepy reads all profiles, ignoring profile=%s",
                    self._chrome_profile,
                )

            cookies = rookiepy.chrome(["hh.ru"])
            self._cookies = {c["name"]: c["value"] for c in cookies}
            log.debug("Loaded %d cookies via rookiepy", len(self._cookies))

            if "hhrole" in self._cookies:
                log.debug("hhrole: %s", self._cookies.get("hhrole"))

            return self._cookies

        except ImportError:
            log.debug("rookiepy not available")
        except Exception as e:
            log.warning("rookiepy failed: %s", e)

        log.error(
            "Failed to load cookies. Chrome may be running - close it or use rookiepy."
        )
        return {}

    def load_gib_headers(self) -> dict[str, str]:
        """Load cached GIB headers."""
        if self.gib_cache_path.exists():
            try:
                with open(self.gib_cache_path) as f:
                    self._gib_headers = json.load(f)
                log.debug("Loaded GIB headers from cache")
                return self._gib_headers
            except Exception as e:
                log.warning("Failed to load GIB cache: %s", e)
        return {}

    def save_gib_headers(self, headers: dict[str, str]) -> None:
        """Save GIB headers to cache."""
        self._gib_headers = headers
        self.gib_cache_path.parent.mkdir(parents=True, exist_ok=True)
        with open(self.gib_cache_path, "w") as f:
            json.dump(headers, f, indent=2)
        log.debug("Saved GIB headers to cache")

    def refresh_gib_via_nodriver(self) -> dict[str, str]:
        """Refresh GIB tokens using nodriver with Chrome profile."""
        import asyncio

        async def _get_gib():
            try:
                import nodriver as uc
            except ImportError:
                log.error("nodriver not installed: pip install nodriver")
                return {}

            log.info("Starting nodriver to refresh GIB tokens...")

            # Use the same Chrome profile to get authenticated session
            chrome_user_data = Path.home() / ".config" / "google-chrome"

            browser = None
            try:
                browser = await uc.start(
                    headless=False,
                    user_data_dir=str(chrome_user_data),
                    browser_args=[f"--profile-directory={self._chrome_profile}"],
                )

                page = await browser.get("https://hh.ru")

                # Wait for GIB scripts to load (they load async)
                for attempt in range(10):
                    await asyncio.sleep(2)
                    gib_headers = await page.evaluate(
                        """
                        () => {
                            if (window.gib && window.gib.getOTTHeaders) {
                                return window.gib.getOTTHeaders();
                            }
                            return null;
                        }
                    """
                    )
                    if gib_headers:
                        log.info("Got GIB headers on attempt %d", attempt + 1)
                        self.save_gib_headers(gib_headers)
                        return gib_headers
                    log.debug("GIB not ready, attempt %d/10", attempt + 1)

                log.error("window.gib not found after 10 attempts")
                return {}
            except Exception as e:
                log.error("nodriver error: %s", e)
                return {}
            finally:
                if browser:
                    try:
                        browser.stop()
                    except Exception:
                        pass

        return asyncio.run(_get_gib())

    def get_session_data(self) -> tuple[dict[str, str], dict[str, str]]:
        """Get cookies and GIB headers, loading from cache if needed."""
        if not self._cookies:
            self.load_cookies()
        if not self._gib_headers:
            self.load_gib_headers()
        return self._cookies, self._gib_headers

    def detect_subdomain(self, response_url: str) -> str | None:
        """Extract subdomain from redirect URL."""
        from urllib.parse import urlparse

        parsed = urlparse(response_url)
        if parsed.hostname and parsed.hostname != "hh.ru":
            self._subdomain = parsed.hostname
            log.debug("Detected subdomain: %s", self._subdomain)
        return self._subdomain

    @property
    def base_url(self) -> str:
        """Get base URL (with subdomain if detected)."""
        if self._subdomain:
            return f"https://{self._subdomain}"
        return "https://hh.ru"

    def is_valid(self) -> bool:
        """Check if session has required data."""
        # _xsrf is optional - it can be extracted from form
        required_cookies = ["hhtoken", "hhuid"]

        has_cookies = all(c in self._cookies for c in required_cookies)

        # GIB can be in headers (from gib_cache.json) or in cookies (from authorize)
        gib_in_headers = all(
            h in self._gib_headers
            for h in ["X-GIB-GSSCgib-w-hh", "X-GIB-FGSSCgib-w-hh"]
        )
        gib_in_cookies = any(
            c in self._cookies
            for c in ["gsscgib-w-hh", "__zzatgib-w-hh"]
        )

        return has_cookies and (gib_in_headers or gib_in_cookies)
