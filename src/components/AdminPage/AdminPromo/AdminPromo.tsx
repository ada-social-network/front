import { FunctionComponent } from 'react'

import PostPromoForm from './PostPromoForm'
import PostButton from '../PostButton'

import PromoTable from './PromoTable'

const AdminPromo: FunctionComponent = () => {
  return (
    <div className="ml-20 mx-4">
      <h1 className='text-center my-6'>Gestion des promotions</h1>
      <div className="flex flex-col items-center">
        <PostButton title={'Ajouter une nouvelle promotion'} form={<PostPromoForm />} onOpen={() => {}} />

        <PromoTable />
      </div>
    </div>
  )
}

export default AdminPromo
