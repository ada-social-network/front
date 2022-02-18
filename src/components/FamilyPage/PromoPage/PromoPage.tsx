import { FunctionComponent, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getUsersByPromo, User } from '../../../services/user.service'

type ParamProps ={
 id : string,
}

const PromoPage: FunctionComponent = () => {
  const [users, setUsers] = useState<User[]>([])
  const { id } = useParams<ParamProps>()
  useEffect(() => {
    getUsersByPromo(id).then((res) => {
      setUsers(res)
    })
  }, [])
  return (
    <div>

      <h1 className="m-8">Promo Page</h1>
      {users
        ? users.map((user) => {
          return <p key={user.id}> {user.firstName} </p>
        })
        : 'oups'}

    </div>
  )
}

export default PromoPage
