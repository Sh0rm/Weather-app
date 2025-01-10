import axios from "axios";

const api = axios.create({
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
