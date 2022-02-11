import { FunctionComponent, useEffect, useState } from 'react'

import { getUser, User } from '../../services/user.service'
import DateComponent from '../WelcomePage/DateComponent'

interface Props {
  content: string;
  createdAt?: Date;
  id: string;
  topicID:string
  userId:string
}

const PostCard: FunctionComponent<Props> = ({ content, createdAt, id, topicID, userId }) => {
  const [author, setAuthor] = useState<User|undefined>()

  useEffect(() => {
    getUser(userId).then((response) => {
      setAuthor(response)
    })
  }, [])

  return (
    <div className="border-b border-red flex-col px-6 py-2 items-center flex-none">
      <div className="flex items-start mb-4 text-sm">

        <img src={author?.profilPic} className="w-10 h-10 rounded mr-3 object-cover"/>
        <div className="flex-1 overflow-hidden">
          <div className="flex justify-between">
            <span className="font-bold">{author?.firstName} {author?.lastName}</span>
            <span className="text-grey text-xs "><DateComponent date={createdAt} /></span>
          </div>
          <p className="text-black leading-normal">{content}</p>
        </div>
      </div>
    </div>
  )
}

export default PostCard
