import { FunctionComponent, useState } from 'react'
import { deletePromo } from '../../../services/admin.service'

import { Promo } from '../../FamilyPage/FamilyPage'
import DeleteForm from '../DeleteForm'

import ModifyPromoForm from './ModifyPromoForm'

const PromoRow:FunctionComponent<Promo> = ({ ...promo }) => {
  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false)
  const handleModifyClose = () => {
    setIsModifyModalOpen(false)
    window.location.reload()
  }

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const handleDeleteClose = () => {
    setIsDeleteModalOpen(false)
    window.location.reload()
  }

  if (isModifyModalOpen === true) {
    return (<ModifyPromoForm onClose={handleModifyClose} promoToUpdate={promo}/>)
  } else if (isDeleteModalOpen === true) {
    return (<DeleteForm onClose={handleDeleteClose} idToDelete={promo.id} nameToDelete={promo.promo} onDelete={deletePromo}/>)
  } else {
    return (<tr>
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
        <div className="text-left font-medium text-green-500">
          {/*  {count} */}
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-lg text-center flex-col">
          <button
            className="max-w-10 bg-blue mx-2 text-white text-xs px-6 py-3 rounded hover:shadow-lg m-2"
            type="button"
            onClick={() => setIsModifyModalOpen(!isModifyModalOpen)}
          >
              Modifier
          </button>
          <button
            className="max-w-10 bg-blue mx-2 text-white text-xs px-6 py-3 rounded hover:shadow-lg m-2"
            type="button"
            onClick={() => setIsDeleteModalOpen(!isDeleteModalOpen)}
          >
              Supprimer
          </button>
        </div>
      </td>
    </tr>)
  }
}
export default PromoRow
