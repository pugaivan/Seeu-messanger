import axios from 'axios'
import { API_URL } from '../utils/config'
import { parseErrorMessage } from '../utils/helper'

const apiCLient = axios.create({
  baseURL: API_URL,
})

export const createUser = async (data) => {
  try {
    const res = await apiCLient.post(`/create`, data)

    return { data: res.data, isSuccessful: true }
  } catch (error) {
    return { data: { errorMessage: parseErrorMessage(error) } }
  }
}

export const loginUser = async (data) => {
  try {
    const res = await apiCLient.post(`/login`, data)

    return { data: res.data, isSuccessful: true }
  } catch (error) {
    return { data: { errorMessage: parseErrorMessage(error) } }
  }
}

export const getNewContact = async (data) => {
  try {
    const res = await apiCLient.post(`/contact`, data, {
      headers: {
        Authorization: localStorage.getItem('jwt'),
      },
    })

    return { data: res.data, isSuccessful: true }
  } catch (error) {
    return { data: { errorMessage: parseErrorMessage(error) } }
  }
}

export const getContacts = async () => {
  try {
    const res = await apiCLient.get(`/contacts`, {
      headers: {
        Authorization: localStorage.getItem('jwt'),
      },
    })
    return { res, isSuccessful: true }
  } catch (err) {
    return {
      isSuccessful: false,
    }
  }
}

export const deleteContact = async (data) => {
  try {
    const res = await apiCLient.delete(`/contact`, {
      headers: {
        Authorization: localStorage.getItem('jwt'),
      },
      data,
    })
    return { isSuccessful: true }
  } catch (err) {
    return {
      isSuccessful: false,
    }
  }
}
