import { FunctionComponent } from 'react'
import { useMediaQuery } from 'react-responsive'
import NavBar from './NavBar/NavBar'
import SideBar from './SideBar/SideBar'
import { getCurrentUser } from '../../services/user.service'

const user = getCurrentUser()
console.log(user)
const Layout: FunctionComponent = ({ children }) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 900px)' })

  return (
    <div>
      <NavBar />
      <div className="flex flex-row">
        {isSmallScreen ? <SideBar small={true} /> : <SideBar small={false} />}
        {children}
      </div>
    </div>
  )
}

export default Layout
