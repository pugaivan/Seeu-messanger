import axios from "axios";
import { API_URL } from "../utils/config";

const apiCLient = axios.create({
    baseURL: API_URL
});

export const createUser = async (data) => {
    const res = await apiCLient.post(`/create`, data)

    return res
}


export const loginUser = async (data) => {
    const res = await apiCLient.post(`/login`, data)

    return res
}
