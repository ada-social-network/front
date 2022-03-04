import { FunctionComponent, useEffect, useState } from 'react'
import { useUserContext } from '../../context/userContext'
import Insta from '../../logo/insta.svg'
import Github from '../../logo/github.svg'
import Linkedin from '../../logo/linkedin.svg'
import { getUser, User } from '../../services/user.service'
import { useParams } from 'react-router'
import EditableField from './EditableField'
import { NonEditableField } from './NonEditableField'

interface Props {
  small : boolean,
}

interface Params {
  id : string
}

const ProfilePage: FunctionComponent<Props> = ({ small }) => {
  const { user } = useUserContext()

  if (user.firstName === '') {
    return <div></div>
  }

  const [anyUser, setAnyUser] = useState<User | undefined>()

  const { id } = useParams<Params>()

  useEffect(() => {
    getUser(id).then((response) => {
      setAnyUser(response)
    })
  }, [])

  const hrefInsta = `https://www.instagram.com/${anyUser?.instagram}`
  const profilPic = 'https://cdn.radiofrance.fr/s3/cruiser-production/2020/03/e67b4427-4143-4eef-9dc2-5c893a445662/838_800px-ada_lovelace_portrait.jpg'
  const coverImage = 'https://thumb.canalplus.pro/http/unsafe/3532x1914/smart/creativemedia-image.canalplus.pro/content/0001/33/a50a92ea1757a6f64a1edefbeb69f3defd498149.jpeg'

  const [bio, setBio] = useState<string | undefined>(user.biography)
  const [proProjects, setProProjects] = useState<string | any>(user.projectPro)
  const [persoProjects, setPersoProjects] = useState<string | undefined>(user.projectPerso)

  return (
    <div className="my-8 w-5/6 mx-auto">
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
          <div className='container flex flex-row border-2 border-blue w-36 place-content-center place-self-end'>
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
        </div>
      </div>

      <div className="flex justify-center flex-col mt-10 mb-3.5">
        <h1 className="text-center text-2xl">{anyUser?.firstName + ' ' + anyUser?.lastName}</h1>
      </div>

      <div className='container flex mt-14 justify-center'>
        <div className="p-4 border-blue border-4 shadow-red box-border w-full">
          { user.id === anyUser?.id
            ? <EditableField name={'Biographie'} attribute={bio} setAttribute={setBio} objectToSubmit={{ biography: bio }} toShow={anyUser?.biography} />
            : <NonEditableField name={'Biographie'} toShow={anyUser?.biography} />
          }

          <div className='container grid grid-cols-2 mb-4'>
            <NonEditableField name={'Anniversaire'} toShow={anyUser?.dateOfBirth} />
            <NonEditableField name={'Alternance'} toShow={anyUser?.apprenticeAt} />
          </div>
        </div>
      </div>

      <div className='container flex mt-24 justify-center'>
        <div className="p-4 border-blue border-4 shadow-red box-border w-full" >
          { user.id === anyUser?.id
            ? <>
              <EditableField name={'Mes projets pro'} attribute={proProjects} setAttribute={setProProjects} objectToSubmit={{ projectPro: proProjects }} toShow={anyUser?.projectPro} />
              <EditableField name={'Mes projets perso'} attribute={persoProjects} setAttribute={setPersoProjects} objectToSubmit={{ projectPerso: persoProjects }} toShow={anyUser?.projectPerso} />
            </>
            : <>
              <NonEditableField name={'Mes projets pro'} toShow={anyUser?.projectPro} />
              <NonEditableField name={'Mes projets perso'} toShow={anyUser?.projectPerso} />
            </>
          }

        </div>
      </div>
    </div>
  )
}

export default ProfilePage
