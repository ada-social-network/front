import { FunctionComponent, useState } from 'react'

import { Promo } from '../../FamilyPage/FamilyPage'
import PostButton from '../PostButton'
import ModifyPromoForm from './ModifyPromoForm'

const PromoRow:FunctionComponent<Promo> = ({ ...promo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleClose = () => {
    setIsModalOpen(false)
    window.location.reload()
  }
  return (
    <>
      <tr>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center">
            <div className="w-10 h-10 mr-2 sm:mr-3"><img className="rounded-full object-cover" src={promo.profilePic}/></div>
            <div className="font-medium text-gray-800">{promo.promo}</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left">{promo.id}</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium text-green-500"></div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-lg text-center flex-col">
            <button
              className="max-w-10 bg-blue mx-2 text-white text-xs px-6 py-3 rounded hover:shadow-lg m-2"
              type="button"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              Modifier
            </button>
          </div>
        </td>
      </tr>
      {isModalOpen
        ? <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white text-left border-4 border-blue rounded-md overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">

                    <ModifyPromoForm onClose={handleClose} promoToUpdate={promo}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        : null }
    </>

  )
}
export default PromoRow
