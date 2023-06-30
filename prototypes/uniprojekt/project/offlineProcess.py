
import pymysql
import pandas as pd
import numpy as np
import sys

username = sys.argv[1]
#username = "niklas"

db = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    database="userInfo"
)

def generate_recommendations():
   
    query = f"SELECT * FROM posts p LEFT JOIN likes as l ON p.id = l.postID WHERE l.userName = '{username}' "
    
    df = pd.read_sql(query, db)

    query = f"SELECT p.id, p.username, p.plane, p.location, p.description, l.userName FROM posts p LEFT JOIN likes as l ON p.id = l.postID WHERE l.userName <> '{username}' "
    dt = pd.read_sql(query, db)


    for index, row in df.iterrows():
        if row['plane'] in ['B2', 'B1', 'B52']:
            df.at[index, 'category'] = 'bomber'
        elif row['plane'] in ['F16', 'F35', 'F14', 'F22']:
            df.at[index, 'category'] = 'fighter'
        elif row['plane'] in ['SR71', 'A12', 'Blackbird']:
            df.at[index, 'category'] = 'recon'
        else:
            df.at[index, 'category'] = 'unknown'

    for index, row in dt.iterrows():
        if row['plane'] in ['B2', 'B1', 'B52']:
            dt.at[index, 'category'] = 'bomber'
        elif row['plane'] in ['F16', 'F35', 'F14', 'F22']:
            dt.at[index, 'category'] = 'fighter'
        elif row['plane'] in ['SR71', 'A12', 'Blackbird']:
            dt.at[index, 'category'] = 'recon'
        else:
            dt.at[index, 'category'] = 'unknown'

 

    
    user_list = df['userName'].unique()
   


    
    
    user_category = {}
    for user in user_list:
        user_data = df[df['username'] == user]
        if user_data.empty:
            user_category[user] = {'recon'}
        else:
            category_counts = user_data.groupby('category').size().sort_values(ascending=False)
            max_count = category_counts.max()
            max_categories = category_counts[category_counts == max_count].index.tolist()
            user_category[user] = set([max_categories[0]])
            
            

 


    
    user_category_sim = {}
    user_list_sim = dt['userName'].unique()
    for user in user_list_sim:
        user_data = dt[dt['userName'] == user]
        if user_data.empty:
            user_category_sim[user] = set()
        else:
            category_counts = user_data.groupby('category').size().sort_values(ascending=False)
            max_count = category_counts.max()
            max_categories = category_counts[category_counts == max_count].index.tolist()
            user_category_sim[user] = set([max_categories[0]])



    similar_users = []
    for user, pattern in user_category_sim.items():
        if pattern == set():
            continue
        temp = dt[dt['username'] == user]['category'].unique()
        if set(temp) == pattern:
            similar_users.append(user)


  

    
    recommended_posts = []
    for user in similar_users:
        posts = dt[(dt['userName'] == user) & ~(dt['id'].isin(df['postID']))]
        if not posts.empty:
            recommended_posts.extend(posts['id'].tolist())



    
    if not recommended_posts:
        recommended_posts = dt[~(dt['id'].isin(df['postID']))]['id'].tolist()
        if recommended_posts:
            recommended_posts = [recommended_posts[0]]
    

    id = recommended_posts[0]
    
    if id:
        print(id)
    else:
        print(7)
    
    """
    if recommended_posts:
        query = f"SELECT * FROM posts WHERE id = {id}"
        recommended_df = pd.read_sql(query, db)
        print(recommended_df.to_string(index=False))
    """

generate_recommendations()



