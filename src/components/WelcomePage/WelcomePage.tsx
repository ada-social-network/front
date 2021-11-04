import react, { FunctionComponent } from "react"
import { useMediaQuery } from 'react-responsive'

import  NavBar from "../global/NavBar/NavBar";
import SideBar from "../global/SideBar/SideBar";


const WelcomePage: FunctionComponent = () => {
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 1224px)' })
    const isSmallScreen = useMediaQuery({ query: '(max-width: 900px)' })

    return (
        <div>
            <NavBar />
            {isSmallScreen ? (
                <SideBar small={true} />
            ) : (
                <SideBar small={false}/>
            )}
        </div>
    )
}
    

export default WelcomePage;