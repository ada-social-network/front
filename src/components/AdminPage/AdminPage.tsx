import { FunctionComponent, useState } from 'react'
import Navbar from '../global/NavBar/NavBar'
import PostPromoForm from './AdminPromo/PostPromoForm'
import PostButton from './PostButton'

const AdminPage: FunctionComponent = () => {
  const [show, setToShow] = useState()

  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <div className='flex flex-col mt-20'>
        <h1 className='text-center m-8'>Admin</h1>
        <div className='grid grid-cols-5 mx-8'>
          <div className='grid grid-rows-5 text-xl font-medium border-2 border-blue'>
            <button className='p-8 border-2 border-blue' onClick={setToShow('actualité')}>
              Actualité
            </button>
            <button className='p-8 border-2 border-blue'>
              Forum
            </button>
            <button className='p-8 border-2 border-blue'>
              Promos
            </button>
            <button className='p-8 border-2 border-blue'>
              Apprenantes
            </button>
            <button className='p-8 border-2 border-blue'>
              Evènements
            </button>
          </div>
          <div className='col-span-4'>
            Actualité
          </div>
        </div>
      </div>
      <PostButton title={'Poster une nouvelle promo'} form={<PostPromoForm onClose={() => {}}/>} onOpen={() => {}} />
    </div>
  )
}

export default AdminPage
