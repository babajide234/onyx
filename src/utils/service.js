import axios from "axios";
const BASE_URL = "http://api.theonyxtruth.com/api/v1/";

export const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "accept": "/",
        "Content-Type": "application/json",
    },
})

