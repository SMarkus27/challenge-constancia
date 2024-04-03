from abc import ABC, abstractmethod
from typing import List

from src.application.usecases.dtos.client import ClientDto


class IClientRepository(ABC):

    @classmethod
    @abstractmethod
    def get_client(cls) -> List[ClientDto]:
        pass
