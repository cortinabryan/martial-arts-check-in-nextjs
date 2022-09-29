import axios from "axios"; // Axios is a library to talk to backend

export const Axios = axios.create({
  baseURL: "http://localhost:5000/",
});
