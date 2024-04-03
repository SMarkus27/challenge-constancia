from typing import List

from src.application.interfaces.client import IClientRepository
from src.application.usecases.dtos.client import ClientDto
from src.infra.databases.postgres.database import PostgresConnection


class ClientRepository(IClientRepository):

    @classmethod
    async def get_client(cls) -> List[ClientDto]:
        connection = await PostgresConnection.get_connection()
        cursor = connection.cursor()
        await cursor.execute("SELECT name,value, created_at from client_debts")
        await connection.commit()
        data = await cursor.fetchall()
        return data
