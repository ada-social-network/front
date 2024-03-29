import axios from 'axios'

const API_URL = `${process.env.REACT_APP_URL}/auth/`

export const register = (values: object) => {
  return axios
    .post(API_URL + 'register', JSON.stringify(values))
}

export const isLogin = () => !!localStorage.getItem('user')

export const login = (email: string, password: string) => {
  return axios
    .post(API_URL + 'login', JSON.stringify({
      email, password
    }),
    { headers: { 'Content-Type': 'application/json' } })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data.token))
        isLogin()
      }
      return response.data
    })
}

export const logOut = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('current')
  window.location.replace('/login')
  isLogin()
}
