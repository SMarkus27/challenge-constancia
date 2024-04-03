from typing import List

from typing_extensions import TypedDict

from src.application.usecases.dtos.client import ClientDto


class ClientResponse(TypedDict):
    success: bool
    data: List[ClientDto]