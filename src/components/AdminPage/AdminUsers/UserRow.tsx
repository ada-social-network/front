import { FunctionComponent, useState } from 'react'
import { deleteUser } from '../../../services/admin.service'
import { User } from '../../../services/user.service'
import ModifyPromoForm from '../AdminPromo/ModifyPromoForm'
import DeleteForm from '../DeleteForm'

const UserRow:FunctionComponent<User> = ({ ...user }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const handleDeleteClose = () => {
    setIsDeleteModalOpen(false)
    window.location.reload()
  }

  if (isDeleteModalOpen === true) {
    return (<DeleteForm onClose={handleDeleteClose} idToDelete={user.id} nameToDelete={user.firstName} onDelete={deleteUser} />)
  } else {
    return (<tr>
      <td className="p-2 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-10 h-10 mr-2 sm:mr-3"><img className="rounded-full object-cover" src={user.profilPic}/></div>
          <div className="font-medium text-gray-800">{user.firstName} {user.lastName}</div>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{user.id}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left font-medium text-green-500">
          {user.promoId}
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-lg text-center flex-col">
          <div className="flex flex-row justify-center">
            {user.isAdmin
              ? (

                <div className="form-check">
                  <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" checked/>
                </div>

              )
              : (<div className="form-check">
                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" />
              </div>)
            }

            <button
              className="max-w-10 bg-blue mx-2 text-white text-xs px-6 py-3 rounded hover:shadow-lg m-2"
              type="button"
              onClick={() => setIsDeleteModalOpen(!isDeleteModalOpen)}
            >
              Supprimer
            </button>
          </div>
        </div>

      </td>
    </tr>)
  }
}

export default UserRow
