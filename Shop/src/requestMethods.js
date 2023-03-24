import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const item = localStorage.getItem("persist:root")
const TOKEN = item ? JSON.parse(JSON.parse(item)?.user).currentUser?.accessToken : null
console.log(TOKEN)

export const publicRequest = axios.create({
  baseURL: BASE_URL
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` }
});
