import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:8080/api/rest/v1/'

export type User = {
  ID: string;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  DeletedAt?: Date;
  first_name: string,
  last_name: string,
  email : string,
  date_of_birth ?: string,
  apprentice_at?: string,
  profil_pic?: string,
  private_mail?: string,
  instagram?: string,
  facebook?: string,
  github?: string,
  linkedin?: string,
  mbti?: string,
  is_admin?: string,
  promo_id?: string,
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
