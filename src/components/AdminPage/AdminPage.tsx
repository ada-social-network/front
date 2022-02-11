import { FunctionComponent, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Navbar from '../global/NavBar/NavBar'
import AdminSideBar from './AdminSideBar'
import { useUserContext } from '../../context/userContext'
import { faGlobe, faCommentDots, faCalendarAlt, faUsers, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import ActuPage from './ActuPage/ActuPage'
import PostPromoForm from './AdminPromo/PostPromoForm'
import AdminPromo from './AdminPromo/AdminPromo'
import AdminForum from './AdminForum/AdminForum'

interface Page {
  name: string;
  icon: IconProp;
}

const AdminPage: FunctionComponent = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 900px)' })
  const { user } = useUserContext()

  const pages: Page[] = [
    { name: 'Actualité', icon: faGlobe },
    { name: 'Forum', icon: faCommentDots },
    { name: 'Promos', icon: faGraduationCap },
    { name: 'Apprenantes', icon: faUsers },
    { name: 'Evènements', icon: faCalendarAlt }
  ]
  const [active, setActive] = useState(pages[0])

  return (
    <div>
      <Navbar />
      <div className='flex flex-row w-full'>
        <AdminSideBar pages={pages} setActive={setActive} small={!!isSmallScreen} />
        <div className="flex flex-col w-5/6 ml-6 mt-20">

          {
            {
              Actualité: <ActuPage />,
              Promos: <AdminPromo/>,
              Forum: <AdminForum />

            }[active.name]
          }
        </div>
      </div>
    </div>
  )
}

export default AdminPage
