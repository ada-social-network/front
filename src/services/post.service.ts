import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:8080/api/rest/v1/'

export const getBdaPosts = () => {
  return axios
    .get(API_URL + 'bdaposts', { headers: { Authorization: authHeader() } })
    .then((response) => {
      return response.data
    })
}

export const postBdaPost = (values: object) => {
  return axios
    .post(API_URL + 'bdaposts', JSON.stringify(values), { headers: { Authorization: authHeader() } })
}

export const getBdaPostComments = (id : string) => {
  return axios
    .get(API_URL + 'bdaposts/' + id + '/comments', { headers: { Authorization: authHeader() } })
    .then((response) => {
      return response.data
    })
}

export const postBdaComment = (values: object) => {
  return axios
    .post(API_URL + 'comments', JSON.stringify(values), { headers: { Authorization: authHeader() } })
}
