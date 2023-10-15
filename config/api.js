import axios from "axios";

export const API_URL = "https://demo.uats.site/api/";

export const api = axios.create({
  baseURL: API_URL,
});

api.defaults.timeout = 60000;
