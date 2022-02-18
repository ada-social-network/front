import { FunctionComponent, useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import Navbar from '../global/NavBar/NavBar'
import AdminSideBar from './AdminSideBar'
import { faGlobe, faCommentDots, faCalendarAlt, faUsers, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import ActuPage from './ActuPage/ActuPage'
import AdminPromo from './AdminPromo/AdminPromo'
import AdminWelcome from './AdminWelcome'
import AdminForum from './AdminForum/AdminForum'
import AdminUsers from './AdminUsers/AdminUsers'

interface Page {
  name: string
  icon: IconProp
}

const AdminPage: FunctionComponent = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 900px)' })

  const pages: Page[] = [
    { name: 'Actualité', icon: faGlobe },
    { name: 'Forum', icon: faCommentDots },
    { name: 'Promos', icon: faGraduationCap },
    { name: 'Apprenantes', icon: faUsers },
    { name: 'Evènements', icon: faCalendarAlt }
  ]
  const [active, setActive] = useState<string>('Welcome')

  useEffect(() => sessionStorage.setItem('active', JSON.stringify(active)), [active])
  const stateFromSessionStorage = sessionStorage.getItem('active') as string
  useEffect(() => setActive(JSON.parse(stateFromSessionStorage)), [])

  return (
    <div>
      <Navbar />
      <div className='flex flex-row w-full'>
        <AdminSideBar pages={pages} setActive={setActive} small={!!isSmallScreen} />
        <div className="flex flex-col w-5/6 ml-6 mt-20">
          {
            {
              Welcome: <AdminWelcome />,
              Actualité: <ActuPage />,
              Promos: <AdminPromo />,
              Forum: <AdminForum />,
              Apprenantes: <AdminUsers />
            }[active]
          }
        </div>
      </div>
    </div>
  )
}

export default AdminPage
