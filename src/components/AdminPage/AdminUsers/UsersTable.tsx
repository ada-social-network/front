import { FunctionComponent, useEffect, useState } from 'react'
import { PropertyName } from 'typescript'
import { getUsers } from '../../../services/admin.service'
import { User } from '../../../services/user.service'
import UserRow from './UserRow'

const UserTable: FunctionComponent = () => {
  const [users, setUsers] = useState<User[]>([])

  const filterPromo = (currentFilter :string) => {
    const newUsers = users.filter((newVal) => {
      return newVal.promoId === currentFilter
    })
    setUsers(newUsers)
  }

  function compareLastName (a :any, b: any) {
    if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1
    if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1
    return 0
  }

  function compareFirstName (a :any, b: any) {
    if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) return -1
    if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) return 1
    return 0
  }

  function comparePromo (a :any, b: any) {
    if (a.promoId.toLowerCase() < b.promoId.toLowerCase()) return -1
    if (a.promoId.toLowerCase() > b.promoId.toLowerCase()) return 1
    return 0
  }

  function compareAdmin (a :any, b: any) {
    if (a.isAdmin === false) return 1
    if (a.isAdmin === true) return -1
    return 0
  }

  const sortBy = (users : User[], compareFunction : (a:any, b: any)=> number) => {
    const sortedUsers = [...users]
    return sortedUsers.sort(compareFunction)
  }

  useEffect(() => {
    getUsers()
      .then((response) => {
        setUsers(response)
      })
      .catch(function (error) {
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
      })
  }, [])

  return (
    <div className="flex flex-col">

      <div className="w-full  bg-white shadow-lg rounded-sm border border-gray-200">

        <div className="p-3">

          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">

                <tr>
                  <th className="text-left p-2 whitespace-nowrap">

                  </th>

                  <th className="text-left p-2 whitespace-nowrap">
                    <button onClick={() => setUsers(sortBy(users, compareFirstName))} className="rounded text-gray-400 hover:text-gray-500 focus:underline focus:text-blue">
                      <div className="font-semibold uppercase ">Prénom</div>
                    </button>
                  </th>

                  <th className="text-left p-2 whitespace-nowrap">
                    <button onClick={() => setUsers(sortBy(users, compareLastName))} className="rounded text-gray-400 hover:text-gray-500 focus:underline focus:text-blue">
                      <div className="font-semibold uppercase ">Nom</div>
                    </button>
                  </th>
                  <th className="text-left p-2 whitespace-nowrap">
                    <div className="font-semibold ">Email</div>
                  </th>
                  <th className="text-left p-2 whitespace-nowrap">
                    <button onClick={() => setUsers(sortBy(users, comparePromo))} className="rounded text-gray-400 hover:text-gray-500 focus:underline focus:text-blue">
                      <div className="font-semibold uppercase">Promo </div>
                    </button>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <button onClick={() => setUsers(sortBy(users, compareAdmin))} className="rounded text-gray-400 hover:text-gray-500 focus:underline focus:text-blue">
                      <div className="font-semibold text-center uppercase">Admin</div>
                    </button>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Gérer</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {users !== undefined
                  ? users.map((user, i) => {
                    return (
                      <UserRow key={i} {...user} />

                    )
                  })
                  : 'Il y a un problème ...'}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  )
}

export default UserTable
