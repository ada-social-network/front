import { FunctionComponent, useEffect, useState } from 'react'
import DateComponent from './DateComponent'
import { getUser, User } from '../../services/user.service'

interface Props {
  content: string;
  userId: string;
  createdAt?: Date;
  id: string
}

const Comment: FunctionComponent<Props> = ({ userId, content, createdAt, id }) => {
  const [author, setAuthor] = useState<User|undefined>(undefined)

  useEffect(() => {
    getUser(userId).then((response) => {
      setAuthor(response)
    })
  }, [])
  return (

    <div className="bg-white flex flex-row w-5/6 mx-6">

      <div className="bg-white dark:bg-gray-800 text-black dark:text-gray-200 p-4 antialiased flex">
        <img className="rounded-full h-8 w-8 mr-2 mt-1 " src={author?.profilPic}/>
        <div>
          <div className="bg-gray-100 flex flex-row dark:bg-gray-700 rounded-3xl px-4 pt-2 pb-2.5">
            <div className="font-semibold mr-3 text-sm leading-relaxed">{author?.firstName}</div>
            <div className="text-normal mx-2 leading-snug md:leading-normal">
              {content}
            </div>
          </div>
          <DateComponent date={createdAt} />

        </div>
      </div>
    </div>

  )
}

export default Comment
