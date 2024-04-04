from asyncio import run
from src.infra.databases.postgres.database import PostgresConnection


async def create_base():
    connection = await PostgresConnection.get_connection()
    cursor = connection.cursor()
    query_create_table = "CREATE TABLE IF NOT EXISTS client_debts(id serial PRIMARY KEY, name VARCHAR(50), value DECIMAL(10,2), created_at DATE)"
    await cursor.execute(query_create_table)
    await connection.commit()

    clients = [{
        "name": "João da Silva",
        "value": 2050.55,
        "created_at": "01-02-2024"
    },
        {
            "name": "Maria da Silva",
            "value": 250.99,
            "created_at": "03-02-2024"
        },
        {
            "name": "Carlos José",
            "value": 20050.21,
            "created_at": "03-03-2024"
        },
        {
            "name": "Marcus",
            "value": 9050.30,
            "created_at": "04-03-2024"
        },
    ]

    for client in clients:
        await cursor.execute(f"INSERT INTO client_debts(name, value, created_at) VALUES ('{client['name']}', {client['value']}, '{client['created_at']}')")
        await connection.commit()

    print("Clientes criados")

if __name__ == "__main__":
    run(create_base())