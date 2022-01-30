import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:8080/api/rest/v1/'

export type User = {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  firstName: string,
  lastName: string,
  email : string,
  dateOfBirth ?: string,
  apprenticeAt?: string,
  profilPic?: string,
  privateMail?: string,
  instagram?: string,
  facebook?: string,
  github?: string,
  linkedin?: string,
  mbti?: string,
  isAdmin?: string,
  promoId?: string,
  biography?: string,
  coverPic? : string,
  projectPerso? : string,
  projectPro?: string
}

export const getCurrentUser = () => {
  return axios
    .get<User>(API_URL + 'me', { headers: { Authorization: authHeader() } })
    .then((response) => {
      localStorage.setItem('current', JSON.stringify(response.data.id))
      return response.data
    })
}

export const getUser = (userId :string) => {
  return axios
    .get<User>(API_URL + 'users/' + userId, { headers: { Authorization: authHeader() } })
    .then((response) => {
      return response.data
    })
}

export const getPromoList = () => {
  return axios
    .get(API_URL + 'promos', { headers: { Authorization: authHeader() } })
}

export const updateUser = (id: string, values: object) => {
  return axios
    .patch(API_URL + 'users/' + id,
      JSON.stringify(values),
      { headers: { Authorization: authHeader() } }
    )
}
