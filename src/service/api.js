import axios from "axios";

const API_URL = 'http://localhost:3001'

export const createUser = async (data) => {
    const res = await axios.post(`${API_URL}/create`, data)

    return res
}