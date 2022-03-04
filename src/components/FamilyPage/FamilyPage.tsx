import { FunctionComponent, useEffect, useState } from 'react'
import PromoCard from './PromoCard'
import { getPromoList } from '../../services/user.service'
import PostPromoForm from '../AdminPage/AdminPromo/PostPromoForm'

export interface Promo {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  name: string;
  dateOfStart?: string;
  dateOfEnd?: string;
  biography: string;
  profilePic?: string;
}

export type PromoList = Promo[];

const FamilyPage: FunctionComponent = () => {
  const [promos, setPromos] = useState<PromoList>()

  useEffect(() => {
    getPromoList()
      .then((response) => {
        setPromos(response.data)
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

  if (!promos) return <div>hey</div>

  return (
    <div>

      <h1 className="m-8">Family Page</h1>

      <div className="grid grid-cols-3 gap-6">
        {promos !== null || undefined
          ? promos.map((promo, i) => {
            return (
              <PromoCard key={i} {...promo} />
            )
          })
          : 'Il y a un problème ...'}
      </div>
    </div>
  )
}

export default FamilyPage
