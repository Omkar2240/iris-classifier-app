import sys
import json
import joblib

try:
    input_str = sys.argv[1]
    data = json.loads(input_str)

    model = joblib.load("iris_model.pkl")
    features = [
        data['sepal_length'],
        data['sepal_width'],
        data['petal_length'],
        data['petal_width']
    ]

    result = model.predict([features])[0]
    species = ['setosa', 'versicolor', 'virginica']
    print(species[result])

except Exception as e:
    print(f"Error: {str(e)}", file=sys.stderr)
    sys.exit(1)
