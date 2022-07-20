import axios from "axios";
import { API_URL } from "../utils/config";

const apiCLient = axios.create({
    baseURL: API_URL
});

export const createUser = async (data) => {

    try {
        const res = await apiCLient.post(`/create`, data)

        return { data: res, isSuccessful: true }
    } catch (error) {

        return { data: error }
    }
}
<<<<<<< Updated upstream
=======


export const loginUser = async (data) => {
    try {
        const res = await apiCLient.post(`/login`, data)

        return { data: res, isSuccessful: true }
    }
    catch (error) {

        return { data: error }
    }
}
>>>>>>> Stashed changes
