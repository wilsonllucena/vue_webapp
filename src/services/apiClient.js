import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

api.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem('@Event:token')}`;
export default api;
