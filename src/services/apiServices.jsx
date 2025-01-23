import axios from "axios";
import { CONFIG } from "../config";

export const getToken = async () => {
  try {
    const credentials = `${CONFIG.APP_CLIENT_ID}:${CONFIG.APP_CLIENT_SECRET}`;
    const authData = btoa(credentials); 


    const postData = new URLSearchParams({
      grant_type: "client_credentials",
      scope: "openid",
    });

    const response = await axios.post(CONFIG.APP_TOKEN_URL, postData, {
      headers: {
        Authorization: `Basic ${authData}`, 
        "Content-Type": "application/x-www-form-urlencoded", 
      },
    });
    return response.data.access_token; 
  } catch (error) {
    console.error("Fatching errors:", error);
    throw error;
  }
};

export const fetchData = async (url, token, params = {}) => {
  try {
    const response = await axios.get(url, {
      params,
      headers: {
        Authorization: `Bearer ${token}`, 
        "Content-Type": "application/json", 
      },
    });
    return response.data;
  } catch (error) {
    console.error("Emonitoring data:", error);
    throw error;
  }
};
