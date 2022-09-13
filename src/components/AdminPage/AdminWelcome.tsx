import { FunctionComponent } from 'react'
import { useUserContext } from '../../context/userContext'

const AdminWelcome: FunctionComponent = () => {
  const { user } = useUserContext()

  return (
    <>
      <h1 className='text-center m-8'>Admin</h1>
      {user.isAdmin
        ? <p>Bienvenue sur la page admin {user.firstName} !</p>
        : <p className='text-center m-8'>Tu t&apos;es perdu.e {user.firstName} ? Retourne d&apos;où tu viens ou conséquences!</p>
      }
    </>
  )
}

export default AdminWelcome
