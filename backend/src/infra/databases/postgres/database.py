from decouple import config
from psycopg import AsyncConnection
from psycopg.rows import dict_row


class PostgresConnection:

    @classmethod
    def get_connection(cls):
        con = AsyncConnection.connect(host=config("POSTGRES_HOST"),
                                      dbname=config("POSTGRES_DB"),
                                      user=config("POSTGRES_USER"),
                                      password=config("POSTGRES_PASSWORD"),
                                      row_factory=dict_row)
        return con

