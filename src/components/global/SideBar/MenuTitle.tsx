import { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface Props {
    small : boolean,
    icon : IconProp,
    name: string
}

const MenuTitle: FunctionComponent<Props> = ({ small, icon, name }) => {
  return (
    <div className="flex flex-row items-center transform hover:translate-x-2 transition-transform ease-in duration-200 mt-3 text-gray-800">
      <span className="inline-flex items-center justify-center h-12 w-12 text-lg"><FontAwesomeIcon icon={icon} /></span>
      {small ? (<span></span>) : (<span className="text-l font-medium">{ name }</span>)}
    </div>
  )
}

export default MenuTitle
