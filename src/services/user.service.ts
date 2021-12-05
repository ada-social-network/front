import axios from 'axios'
import React, { FunctionComponent, useEffect } from 'react'
import App from '../App'
import authHeader from './auth-header'

const API_URL = 'http://localhost:8080/api/rest/v1/'

export type User = {
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
  is_admin?: String,
  promo_id?: Number,
}

interface Me {
  userID: Number,
  userEmail : String
}

const getCurrentUserId = async () => {
  return axios
    .get<Me>(API_URL + 'me', { headers: { Authorization: authHeader() } })
    .then((response) => {
      return response.data.userID
    })
}

export const getCurrentUser = async () => {
  const userId = await getCurrentUserId()
  console.log(userId)
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
