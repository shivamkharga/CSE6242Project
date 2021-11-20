import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from scipy.sparse import coo_matrix, vstack, hstack
from scipy.sparse import csr_matrix, find
from scipy import sparse
import itertools
import time
import sys



def parallelize_sparse_matrix2(tfidf_matrix, list_of_indices, ret=20):
    """
    Takes two inputs:
        list_of_indices, which looks like [[0,9],[0,12]] containing the recipe combinations to score
        retu value as number of recipes to return
        
    Computes similarity score for each combination
    
    Adds similarity score and recipe combination to pandas dataframe
    
    Keeps best score for each recipe 1
    """

    stTime = time.time()*1000
        
    df = pd.DataFrame(columns = ['Recipe1', 'Recipe2', 'SimilarityScore'])
    
    for recipes in list_of_indices:
           
        sim = linear_kernel(tfidf_matrix[recipes[0]], tfidf_matrix[recipes[1]])[0][0]

        df = df.append({"Recipe1": recipes[0],
                        "Recipe2": recipes[1],
                        "SimilarityScore": sim},
                        ignore_index=True)
            
    df = df.sort_values(by=['Recipe1','SimilarityScore'],ascending=False).head(ret).reset_index()

    finTime = time.time()*1000     


    return df

def get_highest_word_count(sub, n):
    """takes input a csr sparse matrix and determines which n rows have the most words in common"""
    a = sub.nonzero()[0]
    counts = np.bincount(a)

    x = n
    top = []

    while x > 0:
        m = np.argmax(counts)
        top.append(m)
        counts[m] = 0
        x -= 1
        
    return top

def get_recipe_recommendation(recipe, top_matches):
    stTime = time.time()*1000
    # focus on row for current recipe
    tfidf_matrix = sparse.load_npz('tfidf_matrix_descriptions_only.npz')

    mini = tfidf_matrix[[recipe],:]
    #print(mini)
    # figure out which columns are populated for recipe
    idx = np.argwhere(np.all(mini[..., :] > 0, axis=0))
    #print(idx)
    # extract column for keeping
    colsToKp = idx[:,[1]]
    colsToKp = list(itertools.chain(*colsToKp))
    #print(colsToKp)
    # filter all files down to relevant columns
    sub = tfidf_matrix[:,colsToKp]
    
    # look for rows with most non-zeroes
    matches = get_highest_word_count(sub, top_matches+1)
    print(matches)
    
    #print(sub)
    #list_to_check = list(np.unique(find(sub)[0]))

    # make list distinct
    possible_matches = np.unique(matches)
    matches = possible_matches[possible_matches > recipe]
    #print(matches)

    #print("Found ",len(matches)," possible matches for recipe ",recipe)
    pairs_to_check = [[recipe,i] for i in matches]

    scores = parallelize_sparse_matrix2(tfidf_matrix,pairs_to_check, 10)
    finTime = time.time()*1000     
    print("Took ",(finTime-stTime)*.001," seconds")

    return scores

if __name__ == "__main__":
    get_recipe_recommendation(int(sys.argv[1]),5)