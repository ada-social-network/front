import { FunctionComponent, useContext, useEffect, createContext, useState } from 'react'
import { logOut } from '../services/auth.service'
import { User, getCurrentUser } from '../services/user.service'

interface UserContextType {
  user: User
  userLogOut?: () => void
}
const defaultUser = {
  user: {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    promoId: '00000000-0000-0000-0000-000000000000',
    isAdmin: false
  }
}

export const UserContext = createContext<UserContextType>(defaultUser)

export const UserProvider : FunctionComponent = ({ children }) => {
  const [user, setUser] = useState<User>(defaultUser.user)
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
