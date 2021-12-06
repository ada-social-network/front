/* eslint-disable no-unused-vars */
import React, { FunctionComponent, useContext, useEffect } from 'react'
import { logOut } from '../services/auth.service'
import { User, getCurrentUser } from '../services/user.service'

interface UserContextType {
 user: User
 userLogOut?: () => void
}
const defaultUser = {
  user: {
    ID: 0,
    first_name: '',
    last_name: '',
    email: ''
  }
}

export const UserContext = React.createContext <UserContextType>(defaultUser)

export const UserProvider : FunctionComponent = ({ children }) => {
  const [user, setUser] = React.useState<User>(defaultUser.user)
  const userLogOut = () => {
    logOut()
    setUser(defaultUser.user)
  }
  useEffect(() => {
    getCurrentUser()
      .then((u) => {
        setUser(u)
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          console.log(error.request)
        } else {
          console.log('Error', error.message)
        }
        console.log(error.config)
      })
  }, [])

  return (
    <UserContext.Provider
      value={{
        user,
        userLogOut
      }}
    >
      {children}
    </UserContext.Provider>

  )
}

export const useUserContext = () => useContext(UserContext)