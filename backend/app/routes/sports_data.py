from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_sports_data():
    return {"message": "Sports data endpoint"}

