"""Web client module for bypassing API restrictions."""

from .client import WebClient, WebClientError, GIBBlockedError, AuthRequiredError
from .session import SessionManager
from .parser import TestFormParser, VacancyForm, TestQuestion
from .apply import ApplyWithTests, ApplyWithTestsError

__all__ = [
    "WebClient",
    "WebClientError",
    "GIBBlockedError",
    "AuthRequiredError",
    "SessionManager",
    "TestFormParser",
    "VacancyForm",
    "TestQuestion",
    "ApplyWithTests",
    "ApplyWithTestsError",
]
