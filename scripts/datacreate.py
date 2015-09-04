import pandas as pd
df = pd.read_csv('../dataset/data.csv')
df[1:20].to_json('../dataset/data.json',orient="records")