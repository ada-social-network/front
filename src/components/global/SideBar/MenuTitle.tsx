import { FunctionComponent } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core";


interface Props {
    small : boolean,
    icon : IconProp, 
    name: string,
}

const MenuTitle: FunctionComponent<Props> = ({small, icon, name}) => {
    return (
        <div className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><FontAwesomeIcon icon={icon} /></span>
        {small? (<span></span>):(<span className="text-sm font-medium">{ name }</span>)}
        </div>
)}

export default MenuTitle;