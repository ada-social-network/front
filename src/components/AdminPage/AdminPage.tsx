import { FunctionComponent } from 'react'
import Navbar from '../global/NavBar/NavBar'
import AdminPromo from './AdminPromo/AdminPromo'

const AdminPage: FunctionComponent = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="mt-20">
        <AdminPromo />
      </div>
    </div>
  )
}

export default AdminPage
