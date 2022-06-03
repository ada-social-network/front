import { FunctionComponent } from 'react'
import { useMediaQuery } from 'react-responsive'
import NavBar from './NavBar/NavBar'
import SideBar from './SideBar/SideBar'
import Footer from './Footer'

const Layout: FunctionComponent = ({ children }) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 900px)' })

  return (
    <div>
      <NavBar />
      <div className="relative flex flex-row w-full">
        {isSmallScreen ? <SideBar small={true} /> : <SideBar small={false} />}
        <div className="flex h-screen justify-between flex-col w-full">
          {children}
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Layout
