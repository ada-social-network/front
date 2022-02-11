import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:8080/api/rest/v1/'

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
