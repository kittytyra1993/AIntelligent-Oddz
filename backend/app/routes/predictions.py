from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_predictions():
    return {"message": "Predictions endpoint"}

