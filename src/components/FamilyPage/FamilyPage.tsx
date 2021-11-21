import { FunctionComponent, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import axios from 'axios'
import NavBar from '../global/NavBar/NavBar'
import SideBar from '../global/SideBar/SideBar'
import PromoCard from './PromoCard'

const baseUrl = 'http://localhost:8080/api/rest/v1/promo'

interface Promo {
  ID: Number;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  DeletedAt?: Date;
  promo_name: String;
  date_of_start?: String;
  date_of_end?: String;
  biography: String;
}

type PromoList = Promo[];

const FamilyPage: FunctionComponent = () => {
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1224px)' })
  const isSmallScreen = useMediaQuery({ query: '(max-width: 900px)' })

  const [promos, setPromos] = useState<PromoList | null>(null)

  useEffect(() => {
    axios
      .get<PromoList>(baseUrl)
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
            ID: 0,
            promo_name: 'Error',
            biography:
              "Désolé, il semblerait qu'une interférence ait été détectée sur notre réseau"
          }
        ])
      })
  }, [])

  if (!promos) return null

  return (
    <div>
      <NavBar />
      <div className="flex flex-row">
        {isSmallScreen ? <SideBar small={true} /> : <SideBar small={false} />}
        <div className="flex flex-col mt-20 mx-12 my-2">
          <h1 className="text-2xl m-4 ">Family Page</h1>
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
      </div>
    </div>
  )
}

export default FamilyPage
