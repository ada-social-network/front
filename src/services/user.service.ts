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
}

export const getCurrentUser = async () => {
  return axios
    .get<User>(API_URL + 'me', { headers: { Authorization: authHeader() } })
    .then((response) => {
      return response.data
    })
}

export const getPromoList = () => {
  return axios
    .get(API_URL + 'promos', { headers: { Authorization: authHeader() } })
}
