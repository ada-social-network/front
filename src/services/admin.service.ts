import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:8080/api/rest/v1/'

export const postPromo = (values: object) => {
  return axios
    .post(`${API_URL}promos`, JSON.stringify(values), { headers: { Authorization: authHeader() } })
}
