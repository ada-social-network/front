import { FunctionComponent, useEffect, useState } from 'react'
import MenuTitle from '../global/SideBar/MenuTitle'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import ProfileForm from './ProfileForm'
import { useUserContext } from '../../context/userContext'
import Insta from '../../logo/insta.svg'
import Github from '../../logo/github.svg'
import Linkedin from '../../logo/linkedin.svg'
import { getUser, User } from '../../services/user.service'
import { useParams } from 'react-router'

interface Props {
  small : boolean,
}

interface Params {
  id : string
}

const ProfilePage: FunctionComponent<Props> = ({ small }) => {
  // const { user } = useUserContext()

  const [anyUser, setAnyUser] = useState<User | undefined>()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClose = () => {
    setIsModalOpen(false)
    window.location.reload()
  }

  const { id } = useParams<Params>()

  useEffect(() => {
    getUser(id).then((response) => {
      setAnyUser(response)
    })
  }, [])

  const hrefInsta = `https://www.instagram.com/${anyUser?.instagram}`
  const profilPic = 'https://cdn.radiofrance.fr/s3/cruiser-production/2020/03/e67b4427-4143-4eef-9dc2-5c893a445662/838_800px-ada_lovelace_portrait.jpg'
  const coverImage = 'https://thumb.canalplus.pro/http/unsafe/3532x1914/smart/creativemedia-image.canalplus.pro/content/0001/33/a50a92ea1757a6f64a1edefbeb69f3defd498149.jpeg'

  return (
    <div className="mt-8 8 w-5/6 mx-auto">

      <div className="flex justify-center ">
        <div className="flex flex-col w-full">
          <div className="md:relative ">
            <div className="h-80 w-full  ">
              <img src={coverImage} alt="ADA" className='object-cover h-80 w-full  border-4 border-blue' />

              <div>
                <img src={anyUser?.profilPic ? anyUser?.profilPic : profilPic}
                  className="object-cover rounded-full md:absolute top-60 inset-x-96 border-4 border-pink mx-auto" style={{ width: '170px', height: '168px' }} />
              </div>
            </div>
          </div>
          {/* <div className='absolute right-0'> */}
          <div className='container flex flex-row border-2 border-blue w-36 place-content-center'>
            <div className='w-10'>
              <a href={hrefInsta}>
                <img src={Insta} alt="insta"/>
              </a>
            </div>
            <div className='w-10'>
              <a href={anyUser?.github}>
                <img src={Github} alt="github"/>
              </a>
            </div>
            <div className='w-10'>
              <a href={anyUser?.linkedin}>
                <img src={Linkedin} alt="linkedin"/>
              </a>
            </div>
          </div>
          {/* </div> */}

        </div>
      </div>

      <div className="flex justify-center flex-col mt-10 mb-3.5 ">
        <h1 className="text-center text-2xl">{anyUser?.firstName + ' ' + anyUser?.lastName}</h1>
      </div>

      <div className='container flex mt-14 justify-center '>

        <div className="p-4 border-blue border-4 shadow-red box-border w-full " >
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Biographie</div>
            <p className="text-base">Ceci est une biographie détaillée</p>
          </div>
          <div className='container grid grid-cols-2'>
            <div className="px-6 py-4">
              <h3 className="font-bold text-xl mb-2">Anniversaire</h3>
              <p className="text-base">{anyUser?.dateOfBirth}</p>
            </div>
            <div className="px-6 py-4">
              <h3 className="font-bold text-xl mb-2">Alternance</h3>
              <p className="text-base">{anyUser?.apprenticeAt}</p>
            </div>
          </div>
        </div>

      </div>

      <div className='container flex mt-24 justify-center'>

        <div className="p-4 border-blue border-4 shadow-red box-border w-full " >
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Mes projets pro</div>
            <p className="text-base">??????????</p>
          </div>
          <div className="px-6 py-4">
            <h3 className="font-bold text-xl mb-2">Mes projets perso</h3>
            <p className="text-base">???????????</p>
          </div>
        </div>

      </div>

      <button onClick={() => setIsModalOpen(!isModalOpen)}>
        <MenuTitle name={'Modifier mon profile'} small={small} icon={faUsers}/>
      </button>
      {isModalOpen
        ? <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white text-left border-4 border-red overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg text-center leading-6 font-medium text-gray-900 mb-4" id="modal-title">
                        Modifier votre profil
                    </h3>
                    <ProfileForm onClose={handleClose} />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        : null }
    </div>
  )
}

export default ProfilePage
