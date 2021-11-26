import { FunctionComponent, useState } from 'react'
import MenuTitle from './MenuTitle'
import { faGlobe, faCommentDots, faCalendarAlt, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import BdaPostForm from './BdaPostForm'

interface Props {
  small : boolean,
}

const SideBar: FunctionComponent<Props> = ({ small }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleClose = () => {
    setIsModalOpen(false)
    window.location.reload()
  }
  return (
    <>
      <div className={small ? ('w-14') : ('w-44')}>
        <div className="fixed mt-20 h-screen flex flex-col bg-white border-4 border-pink overflow-hidden">
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
            <li>
              <button onClick={() => setIsModalOpen(!isModalOpen)}>
                <MenuTitle name={'Poster un message'} small={small} icon={faEnvelope}/>
              </button>
            </li>
          </ul>
          {isModalOpen
            ? <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom bg-white text-left border-4 border-red overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4" id="modal-title">
                          Poster un message
                        </h3>
                        <BdaPostForm onClose={handleClose}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            : null }
        </div>
      </div>
    </>

  )
}

export default SideBar
