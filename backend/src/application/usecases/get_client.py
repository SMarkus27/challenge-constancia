from src.application.usecases.responses.client import ClientResponse
from src.infra.repositories.client import ClientRepository


class GetClient:

    def __init__(self, client_repository: ClientRepository):
        self.client_repository = client_repository

    async def execute(self) -> ClientResponse:
        client_result = await self.client_repository.get_client()
        return {
            "success": True,
            "data": client_result
        }
