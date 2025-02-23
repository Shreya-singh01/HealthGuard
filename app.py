from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import tensorflow as tf
import numpy as np
import os

# Initialize the app
app = Flask(__name__)
CORS(app)

# Load models
disease_model = tf.keras.models.load_model(os.path.join('models', 'disease_prediction_model.h5'))
anomaly_model = joblib.load(os.path.join('models', 'isolation_forest_model.pkl'))
recommendation_model = joblib.load(os.path.join('models', 'recommendation_model.pkl'))

@app.route('/api/anomaly-detection', methods=['POST'])
def detect_anomaly():
    try:
        data = request.json['features']
        prediction = anomaly_model.predict([data])
        is_anomaly = prediction[0] == -1
        return jsonify({"isAnomaly": bool(is_anomaly)})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route('/api/disease-prediction', methods=['POST'])
def predict_disease():
    try:
        data = np.array([request.json['features']])
        prediction = disease_model.predict(data)
        disease = np.argmax(prediction, axis=1)[0]
        return jsonify({"disease": str(disease)})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route('/api/recommendation', methods=['POST'])
def get_recommendation():
    try:
        disease = request.json['disease']
        recommendation = recommendation_model.predict([[int(disease)]])
        recommendation_text = recommendation[0] if recommendation else "Consult a specialist."
        return jsonify({"recommendation": recommendation_text})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.errorhandler(400)
def bad_request(error):
    return jsonify({"error": "Bad Request - Check your input data"}), 400

if __name__ == '__main__':
    app.run(port=5000, debug=True)
