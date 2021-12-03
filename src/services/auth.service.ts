import axios from 'axios'

const API_URL = 'http://localhost:8080/auth/'

export const register = (values: object) => {
  return axios
    .post(API_URL + 'register', JSON.stringify(values))
}

export const login = (email: string, password: string) => {
  return axios
    .post(API_URL + 'login', JSON.stringify({
      email, password
    }),
    { headers: { 'Content-Type': 'application/json' } })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data.token))
      }
      return response.data
    })
}

export const logout = () => {
  localStorage.removeItem('user')
}

export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user')
  if (userStr) return JSON.parse(userStr)

  return null
}
