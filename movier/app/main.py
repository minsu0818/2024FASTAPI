# main.py
import pandas as pd
import uvicorn as uvicorn
from fastapi import FastAPI, Query
from starlette.middleware.cors import CORSMiddleware
from resolver import random_items ,random_genres_items
from recommender import item_based_recommendation

app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello 이용희의 영화추천 서비스"}

@app.get("/all/")
async def all_movies():
    result = random_items()
    return {"result": result}

@app.get("/genres/{genre}")
async def genre_movies(genre:str):
    result = random_genres_items(genre)
    return {"result": result}
@app.get("/item-based/{item_id}")
async  def item_based(item_id: str):
    result = item_based_recommendation(item_id)
    return {"result": result}

# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)

@app.get("/weather/")
async def weather(q:str, units:str):
    print(q)
    print(units)
    return {
        "result":f'q={q}:units={units}'}