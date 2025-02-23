import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000/api';

export const detectAnomaly = async (features) => {
  try {
    const response = await axios.post(`${BASE_URL}/anomaly-detection`, { features });
    return response.data;
  } catch (error) {
    console.error('Anomaly Detection Error:', error);
    throw error;
  }
};

export const predictDisease = async (symptoms) => {
  try {
    const response = await axios.post(`${BASE_URL}/disease-prediction`, { symptoms });
    return response.data;
  } catch (error) {
    console.error('Disease Prediction Error:', error);
    throw error;
  }
};

export const getRecommendations = async (userId) => {
  try {
    const response = await axios.post(`${BASE_URL}/recommendation`, { userId });
    return response.data;
  } catch (error) {
    console.error('Recommendation Error:', error);
    throw error;
  }
};