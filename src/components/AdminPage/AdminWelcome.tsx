import { FunctionComponent } from 'react'
import { useUserContext } from '../../context/userContext'

const AdminWelcome: FunctionComponent = () => {
  const { user } = useUserContext()

  return (
    <>
      <h1 className='text-center m-8'>Admin</h1>
      <p>Bienvenue sur la page admin {user.firstName} !</p>
    </>
  )
}

export default AdminWelcome
