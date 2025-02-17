import axios from "axios";

const api = axios.create({
  baseURL: "https://ncnews.novafps.com/api",
});

export default api;
