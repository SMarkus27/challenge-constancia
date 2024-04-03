from src.application.usecases.get_client import GetClient
from src.application.usecases.responses.client import ClientResponse
from src.infra.repositories.client import ClientRepository


class ClientController:

    @classmethod
    async def get_client(cls) -> ClientResponse:
        client_repository = ClientRepository()
        return await GetClient(client_repository).execute()
    