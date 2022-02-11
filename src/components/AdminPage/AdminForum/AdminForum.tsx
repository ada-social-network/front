import { FunctionComponent } from 'react'

import PostCategoryForm from './PostCategoryForm'
import PostButton from '../PostButton'
import CategoryTable from './CategoryTable'

const AdminPromo: FunctionComponent = () => {
  return (
    <div className="ml-20 mx-4">
      <h1 className='my-6'>Gestion du forum</h1>
      <div className="flex flex-col">
        <PostButton title={'Ajouter une nouvelle Catégorie'} form={<PostCategoryForm/>} onClose={() => { window.location.reload() }} />
        <CategoryTable />
      </div>
    </div>
  )
}

export default AdminPromo
