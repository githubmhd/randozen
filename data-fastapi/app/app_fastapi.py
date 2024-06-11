import uvicorn
import pandas as pd
from fastapi import FastAPI




app = FastAPI(docs_url="/documentation")


@app.get('/')
def all() -> dict:
    """
    Affiche toutes les données
    """
    df_rando = pd.read_csv('app/Données.csv', sep=',')
    all = {}
    for index in range(0,len(df_rando)):
        
        ligne = {}
        for column in df_rando.columns:
            
            ligne[column] = df_rando.loc[index,column]

        all[index] = ligne

    return all

@app.get('/select={columns}')
def select(columns:str) -> dict:
    #df_rando = pd.read_csv('app/Données.csv', sep=',')
    """
    Affiche la liste des données pour toutes les randonnées
    pour appeler plusieurs données elles doivent être séparées par %

    Exemples:
        /select=uuid    appelera toutes les uuid
        /select=uuid%type_itinéraire  appelera les uuid et les types d'itinéraires
    """
    all = {}
    for index in range(0,len(df_rando)):

        ligne = {}
        for column in columns.split('%'):
                
            ligne[column] = df_rando.loc[index,column]

        all[index] = ligne

    return all


@app.get('/api/select={columns}/where={column2}=={condition}')

def fonction(columns:str, column2:str, condition:str) -> dict:
    #df_rando = pd.read_csv('app/Données.csv', sep=',')
    """
    Affiche une donnée selon une condition sur une autre donnée
    Exemples:
    /select=uuid/where=type_itinéraire==Sentier 
        renvoie toutes les uuid des itinéraires dont l'itinéraire est un sentier
    """
    all = {}
    for index in range(0,len(df_rando)):

        
        ligne = {}
        if df_rando.loc[index,column2] == str(condition):

            for column in columns.split('%'):
                    
                ligne[column] = df_rando.loc[index,column]

            all[index] = ligne

    return all
#__________________________________________________

if __name__ == '__main__':
    uvicorn.run(app, port=8000, host='0.0.0.0')

