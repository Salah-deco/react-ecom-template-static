import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
// for testing
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2Q4Y2IyNjgxYmM5NDRkNDc0NjQ4ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzQxMzYyNywiZXhwIjoxNjYzNTAwMDI3fQ.znQK5Rj6-RI4MFH866hFwJBTJZhLpj1C9xG-swISDAE";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: "Bearer " + TOKEN },
});
