import axios from 'axios'
import authHeader from './auth-header'

const API_URL = process.env.REACT_APP_URL

export const postPromo = (values: object) => {
  return axios
    .post(`${API_URL}promos`, JSON.stringify(values), { headers: { Authorization: authHeader() } })
}

export const updatePromo = (id: string, values: object) => {
  return axios
    .patch(API_URL + 'promos/' + id,
      JSON.stringify(values),
      { headers: { Authorization: authHeader() } }
    )
}

export const deletePromo = (id: string) => {
  return axios
    .delete(API_URL + 'promos/' + id, { headers: { Authorization: authHeader() } })
}

export const postCategory = (values: object) => {
  return axios
    .post(`${API_URL}categories`, JSON.stringify(values), { headers: { Authorization: authHeader() } })
}

export const getCategories = () => {
  return axios
    .get(API_URL + 'categories', { headers: { Authorization: authHeader() } })
    .then((response) => {
      return response.data
    })
}

export const deleteCategory = (id: string) => {
  return axios
    .delete(API_URL + 'categories/' + id, { headers: { Authorization: authHeader() } })
}

export const getUsers = () => {
  return axios
    .get(API_URL + 'users', { headers: { Authorization: authHeader() } })
    .then((response) => {
      return response.data
    })
}

export const deleteUser = (id: string) => {
  return axios
    .delete(API_URL + 'users/' + id, { headers: { Authorization: authHeader() } })
}

export const deleteBdaPost = (id: string) => {
  return axios
    .delete(API_URL + 'bdaposts/' + id, { headers: { Authorization: authHeader() } })
}
