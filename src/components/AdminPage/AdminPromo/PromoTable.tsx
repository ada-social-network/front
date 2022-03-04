import { FunctionComponent, useEffect, useState } from 'react'
import { getPromoList } from '../../../services/user.service'
import { PromoList, Promo } from '../../FamilyPage/FamilyPage'
import PromoRow from './PromoRow'

const PromoTable: FunctionComponent = () => {
  const [promos, setPromos] = useState<PromoList>([])
  const [promoCount, setPromoCount] = useState<number>(0)

  useEffect(() => {
    getPromoList()
      .then((response) => {
        setPromos(response.data)
        setPromoCount(response.data.length + 1)
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

  return (
    <div className="flex flex-col">

      <div className="w-full  bg-white shadow-lg rounded-sm border border-gray-200">

        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Nom</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Id</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Nombre d'apprenant.es</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Administrer</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {promos !== undefined
                  ? promos.map((promo, i) => {
                    return (
                      <PromoRow key={i} {...promo} />
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

export default PromoTable
