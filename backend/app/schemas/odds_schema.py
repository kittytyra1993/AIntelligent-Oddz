from pydantic import BaseModel

class OddsSchema(BaseModel):
    sport: str
    bookmaker: str
    odds: float

    class Config:
        orm_mode = True

