from pydantic import BaseModel

class PredictionSchema(BaseModel):
    sport: str
    outcome: str
    confidence: float

    class Config:
        orm_mode = True

