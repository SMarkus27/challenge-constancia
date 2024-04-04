from typing_extensions import TypedDict


class ClientDto(TypedDict):
    name: str
    value: float
    created_at: str
