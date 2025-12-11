"""
All functions ever return the same models with particulars properties
"""

from dataclasses import dataclass
from typing import Any, Optional

@dataclass
class BasicsReturns:
    ok: Optional[bool] = True
    error: Optional[Any] = None

    def __str__(self):
        return f'OK: {self.ok}\nError: {self.error}'
    
    def to_dict(self):
        return{
            "ok": self.ok,
            "error": self.error
        }