import axios from "axios";

const BASE_URL = "https://mernapp-eight.vercel.app/api";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDA4ZDdlMmE4ZDExMTE1NzFhOWY1YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3ODYxODg3OCwiZXhwIjoxNjc4ODc4MDc4fQ.xXmi9RXDrkXCSot8dg69E6tCPRmjuGP5vJb8B5h7d-w"

export const publicRequest = axios.create({
  baseURL: BASE_URL
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` }
});
