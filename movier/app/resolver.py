#  resolver.py
import pandas as pd

item_name = "data/movies_final.csv"
def random_items():
    movies_df = pd.read_csv(item_name)
    movies_df = movies_df.fillna('')
    result_items = movies_df.sample(n=10).to_dict("records")
    print(result_items)
    return result_items

def random_genres_items(genre):
    movies_df = pd.read_csv(item_name)
    genre_df =movies_df[ movies_df['genres'].apply(lambda x:genre in x.lower())]
    genre_df = genre_df.fillna('')
    result_items = genre_df.sample(n=10).to_dict("records")
    print(genre_df)
    return result_items

def classic_items():
    return "classic movies"