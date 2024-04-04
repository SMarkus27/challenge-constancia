import fastapi

from src.controllers.client import ClientController


router = fastapi.APIRouter()


@router.get("/clients")
async def find_clients():
    return await ClientController.get_client()
