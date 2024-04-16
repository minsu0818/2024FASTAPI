import joblib
import pandas as pd
from sklearn.neighbors import KNeighborsClassifier
import numpy as np
from sklearn.ensemble import RandomForestClassifier

# iris_df = pd.read_csv('iris.csv')
#
# y = iris_df['species']
# X = iris_df.drop('species', axis=1)
#
# rfc = RandomForestClassifier()
# model_rfc = rfc.fit(X,y)
#
# kn = KNeighborsClassifier()
# model_kn = kn.fit(X,y)
#
# joblib.dump(model_kn,'model_kn.pkl')

model_kn = joblib.load('model_kn.pkl')

X_new = np.array([[2, 1, 2, 1]])

# prediction = model_rfc.predict(X_new)
# print(f'RFC prediction={prediction}')
# probability = model_rfc.predict_proba(X_new)
# print(f'RFC prob={probability}')


prediction = model_kn.predict(X_new)
print(f'KN prediction={prediction}')
probability = model_kn.predict_proba(X_new)
print(f'KN prob={probability}')