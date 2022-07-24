import axios from "axios";
import { API_URL } from "../utils/config";
import { parseErrorMessage } from "../utils/helper"

const apiCLient = axios.create({
    baseURL: API_URL
});

export const createUser = async (data) => {

    try {
        const res = await apiCLient.post(`/create`, data)

        return { data: res, isSuccessful: true }
    } catch (error) {

        return { data: { errorMessage: parseErrorMessage(error) } }
    }
}


export const loginUser = async (data) => {
    try {
        const res = await apiCLient.post(`/login`, data)

        return { data: res, isSuccessful: true }
    }
    catch (error) {

        return { data: { errorMessage: parseErrorMessage(error) } }
    }
}


export const loginUser = async (data) => {
    const res = await apiCLient.post(`/login`, data)

    return res
}
