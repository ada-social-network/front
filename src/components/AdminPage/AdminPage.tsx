import { FunctionComponent } from 'react'
import { useUserContext } from '../../context/userContext'

const AdminPage: FunctionComponent = () => {
  const user = useUserContext()

  return (
    <h1 className='text-center m-8'>Admin</h1>
  )
}

export default AdminPage
