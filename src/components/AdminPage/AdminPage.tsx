import { FunctionComponent } from 'react'
import { useUserContext } from '../../context/userContext'
import Navbar from '../global/NavBar/NavBar'
import PostPromoForm from './AdminPromo/PostPromoForm'
import PostButton from './PostButton'

const AdminPage: FunctionComponent = () => {
  const user = useUserContext()

  return (
    <div className="flex flex-col w-5/6">
      <Navbar />
      <h1 className='text-center m-8'>Admin</h1>
      <PostButton title={'Poster une nouvelle promo'} form={<PostPromoForm onClose={() => {}}/>} onOpen={() => {}} />
    </div>
  )
}

export default AdminPage
