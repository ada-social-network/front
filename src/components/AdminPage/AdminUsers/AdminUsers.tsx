import { FunctionComponent } from 'react'
import UsersTable from './UsersTable'

const AdminUsers: FunctionComponent = () => {
  return (
    <div className="ml-20 mx-4">
      <h1 className=' my-6'>Gestion des Apprenant.e.s</h1>
      <div className="flex flex-col">
        {/*    <PostButton title={'Ajouter une nouvelle Userstion'} form={<PostUsersForm />} onClose={() => { window.location.reload() }} />
*/}
        <UsersTable />
      </div>
    </div>
  )
}

export default AdminUsers
