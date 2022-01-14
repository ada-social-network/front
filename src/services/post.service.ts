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

export const getTopics = (id : string) => {
  return axios
    .get(`${API_URL}categories/${id}/topics`, { headers: { Authorization: authHeader() } })
    .then((response) => {
      return response.data
    })
}

export const postTopic = (id:string, values: object) => {
  return axios
    .post(`${API_URL}categories/${id}/topics`, JSON.stringify(values), { headers: { Authorization: authHeader() } })
}

export const postPost = (id:string, values: object) => {
  return axios
    .post(`${API_URL}topics/${id}/posts`, JSON.stringify(values), { headers: { Authorization: authHeader() } })
}

export const getPosts = (id : string) => {
  return axios
    .get(`${API_URL}topics/${id}/posts`, { headers: { Authorization: authHeader() } })
    .then((response) => {
      return response.data
    })
}
