from psycopg import AsyncConnection
from psycopg.rows import dict_row


class PostgresConnection:

    @classmethod
    def get_connection(cls):
        con = AsyncConnection.connect(host='localhost',
                                      dbname='citizix_db',
                                      user='citizix_user',
                                      password='S3cret',
                                      row_factory=dict_row)
        return con

