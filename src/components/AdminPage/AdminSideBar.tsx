import { FunctionComponent } from 'react'
import MenuTitle from '../global/SideBar/MenuTitle'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface Page {
  name: string;
  icon: IconProp;
}

interface Props {
  small : boolean,
  pages: Page[],
  setActive: (arg: string) => void
}

const AdminSideBar: FunctionComponent<Props> = ({ small, pages, setActive }) => {
  return (
    <>
      <div className={small ? ('w-14') : ('w-44')}>
        <div className={small ? ('w-14') : ('w-44 ') + 'fixed mt-20 pl-2 h-screen overflow-hidden z-50 border-r-4 border-blue'}>
          <button className='w-full text-center mt-8 text-blue font-xl text-xl' onClick={() => setActive('Welcome')}>
            Admin
          </button>
          <ul className="mr-4 py-4">
            {pages.map((page, index) => (
              <li key={index} >
                <button onClick={() => setActive(page.name)}>
                  <MenuTitle name={page.name} small={small} icon={page.icon}/>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>

  )
}

export default AdminSideBar
