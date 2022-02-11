import { FunctionComponent } from 'react'
import MenuTitle from './MenuTitle'
import { faGlobe, faCommentDots, faCalendarAlt, faUsers } from '@fortawesome/free-solid-svg-icons'

interface Props {
  small : boolean,
}

const SideBar: FunctionComponent<Props> = ({ small }) => {
  return (
    <>
      <div className={small ? ('w-14') : ('w-44')}>
        <div className={small ? ('w-14') : ('w-44 ') + 'fixed mt-20 pl-2 h-screen flex flex-col bg-white border-r-4 border-pink overflow-hidden z-50'}>
          <ul className="flex flex-col mr-4 py-4">
            <li>
              <a href="/">
                <MenuTitle name={'Actualités'} small={small} icon={faGlobe}/>
              </a>
            </li>
            <li>
              <a href="/forum">
                <MenuTitle name={'Forum'} small={small} icon={faCommentDots}/>
              </a>
            </li>
            <li>
              <a href="/calendar">
                <MenuTitle name={'Calendrier'} small={small} icon={faCalendarAlt}/>
              </a>
            </li>
            <li>
              <a href="/family">
                <MenuTitle name={'Promos'} small={small} icon={faUsers}/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default SideBar
