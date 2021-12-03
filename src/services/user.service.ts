import axios from 'axios'
import internal from 'stream'
import authHeader from './auth-header'

const API_URL = 'http://localhost:8080/api/rest/v1/me'

type User = {
  ID: Number;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  DeletedAt?: Date;
  first_name: String,
  last_name: String,
  email : String,
  date_of_birth ?: String,
  apprentice_at?: String,
  profil_pic?: String,
  private_mail?: String,
  instagram?: String,
  facebook?: String,
  github?: String,
  linkedin?: String,
  mbti?: String,
  is_admin: String,
  promo_id?: Number,
}

interface Me {
  userName: String,
  userEmail : String
}
export const getCurrentUser = () => {
  return axios
    .get<Me>(API_URL, { headers: { Authorization: authHeader() } })
    .then((res) => {
      console.log(res)
      return res
    })
}
