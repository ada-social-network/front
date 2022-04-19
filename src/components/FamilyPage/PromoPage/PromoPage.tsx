import { FunctionComponent, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getPromo, getUsersByPromo, User } from '../../../services/user.service'
import { Promo } from '../FamilyPage'
import UserCard from './UserCard'

type ParamProps ={
 id : string,
}

const PromoPage: FunctionComponent = () => {
  const [users, setUsers] = useState<User[]>([])
  const [promo, setPromo] = useState<Promo>()
  const { id } = useParams<ParamProps>()
  useEffect(() => {
    getUsersByPromo(id).then((res) => {
      setUsers(res)
    })
    getPromo(id).then((res) => {
      setPromo(res)
    })
  }, [])
  return (
    <div>
      {promo
        ? <h1 className="m-8">{promo.name}</h1>
        : 'Promo' }
      <div className=''>
        {users
          ? users.map((user) => {
            return <UserCard key={user.id} {...user} />
          })
          : 'oups'}
      </div>
    </div>
  )
}

export default PromoPage
