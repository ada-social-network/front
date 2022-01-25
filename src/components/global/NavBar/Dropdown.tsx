import { FunctionComponent, useState, createRef } from 'react'
import { createPopper } from '@popperjs/core'

import { useUserContext } from '../../../context/userContext'

const Dropdown: FunctionComponent = () => {
  const { user, userLogOut } = useUserContext()
  const profileRef = '/profile/' + user.id

  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false)
  const btnDropdownRef = createRef<HTMLButtonElement>()
  const popoverDropdownRef = createRef<HTMLInputElement>()
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current!, popoverDropdownRef.current!, {
      placement: 'bottom-end'
    })
    setDropdownPopoverShow(true)
  }
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false)
  }

  return (
    <div className="flex flex-wrap">
      <div className="w-full sm:w-6/12 md:w-4/12 px-4">
        <div className="relative inline-flex align-middle w-full">
          <button
            className="max-h-10 bg-blue text-white font-bold uppercase text-sm px-6 py-3 rounded hover:shadow-lg "
            type="button"
            ref={btnDropdownRef}
            onClick={() => {
              dropdownPopoverShow
                ? closeDropdownPopover()
                : openDropdownPopover()
            }}
          >
            {user.firstName ? user.firstName : '' }
          </button>
          <div
            ref={popoverDropdownRef}
            className={
              (dropdownPopoverShow ? 'block ' : 'hidden ') +
                            ('bg-white ' + 'text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1')
            }
            style={{ minWidth: '12rem' }}
          >
            <a
              href={profileRef}
              className={
                'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent ' +
                                (' text-blueGray-700')
              }
            >
              Profil
            </a>
            <a
              href="/params"
              className={
                'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent ' +
                                (' text-blueGray-700')
              }
            >
              Paramètres
            </a>
            <a
              href="#pablo"
              className=
                "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "

              onClick={userLogOut}
            >
              Se déconnecter
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dropdown
