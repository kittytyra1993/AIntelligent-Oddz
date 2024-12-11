from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Odds(Base):
    __tablename__ = "odds"

    id = Column(Integer, primary_key=True, index=True)
    sport_id = Column(Integer, ForeignKey("sports.id"))
    bookmaker = Column(String)
    odds = Column(Float)

