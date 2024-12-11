from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Prediction(Base):
    __tablename__ = "predictions"

    id = Column(Integer, primary_key=True, index=True)
    sport_id = Column(Integer, ForeignKey("sports.id"))
    outcome = Column(String)
    confidence = Column(Float)

