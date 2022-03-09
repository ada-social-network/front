import { FunctionComponent, useEffect, useState } from 'react'
import { deleteUser } from '../../../services/admin.service'
import { getPromoList, User } from '../../../services/user.service'
import { Promo } from '../../FamilyPage/FamilyPage'
import DeleteForm from '../DeleteForm'
import ModifyUserForm from './ModifyUserForm'

const userPromo = (promos : Promo[], promoId : string) => {
  const promo = promos.find(promo => promo.id === promoId)
  console.log('prom' + promo)
  if (promoId === '00000000-0000-0000-0000-000000000000') return 'none'
  else if (promo !== undefined) return promo.name
  else return 'none'
}

const UserRow:FunctionComponent<User> = ({ ...user }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false)
  const [promos, setPromos] = useState<Promo[]>([])

  useEffect(() => {
    getPromoList().then(response => {
      console.log(response.data)
      setPromos(response.data)
    }).catch(function (error) {
      if (error.response) {
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log('Error', error.message)
      }
      console.log(error.config)
      setPromos([
        {
          id: '',
          name: 'Error',
          biography:
            "Désolé, il semblerait qu'une interférence ait été détectée sur notre réseau"
        }
      ])
    })
  }, [])

  const handleModifyClose = () => {
    setIsModifyModalOpen(false)
    window.location.reload()
  }

  const handleDeleteClose = () => {
    setIsDeleteModalOpen(false)
    window.location.reload()
  }

  const promoName = userPromo(promos, user.promoId)
  const promoToPass = promos

  if (isModifyModalOpen === true) {
    return (<ModifyUserForm onClose={handleModifyClose} userToUpdate={user} promos={promoToPass} name={promoName}/>)
  } else if (isDeleteModalOpen === true) {
    return (<DeleteForm onClose={handleDeleteClose} idToDelete={user.id} nameToDelete={user.firstName} onDelete={deleteUser} />)
  } else {
    return (<tr>
      <td className="p-2 whitespace-nowrap">
        <div className="mx-auto w-10 h-10 mr-2 sm:mr-3"><img className="h-10 rounded-full object-cover" src={user.profilPic}/></div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="flex items-center">
          <div className="font-medium text-gray-800">{user.firstName} </div>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{user.lastName}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{user.id}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left font-medium text-gray-500">
          {promoName}
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left font-medium">
          {user.isAdmin
            ? <p className="text-green-500">yes she is</p>
            : 'loooooser'
          }
        </div>
      </td>

      <td className="p-2 whitespace-nowrap">
        <div className="text-lg text-center flex-col">
          <div className="flex flex-row justify-center">

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
        </div>

      </td>
    </tr>)
  }
}

export default UserRow
