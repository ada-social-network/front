import { FunctionComponent, useEffect, useState } from 'react'
import DateComponent from './DateComponent'
import { getUser, User } from '../../services/user.service'
// import { getCommentLikes } from '../../services/post.service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import DislikeButton from './DislikeButton'
import LikeButton from './LikeButton'

interface Props {
  content: string;
  userId: string;
  createdAt?: Date;
  id: string
}

export type Like = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: null | Date;
  userId: string;
  bdapostId: string;
}

export type LikeList = {
  items: Like[];
  count: number;
  isLiked : boolean;
}

const Comment: FunctionComponent<Props> = ({ userId, content, createdAt, id }) => {
  const [author, setAuthor] = useState<User|undefined>(undefined)

  useEffect(() => {
    getUser(userId).then((response) => {
      setAuthor(response)
    })
  }, [userId])
  return (

    <div className="bg-white flex flex-row w-5/6 mx-6">

      <div className="bg-white dark:bg-gray-800 text-black dark:text-gray-200 p-4 antialiased flex">
        <div>
          <a href={`/profile/${author?.id}`}>
            <img className="rounded-full object-cover h-10 w-10 mr-2 " src={author?.profilPic}/>
          </a>
        </div>
        <div>

          <div className="bg-gray-100 flex flex-row dark:bg-gray-700 rounded-xl px-4 pt-2 pb-2.5">
            <div className="font-semibold mr-3 text-sm leading-relaxed">{author?.firstName}</div>
            <div className="text-normal mx-2 leading-snug md:leading-normal">
              {content}
            </div>
            <div className={('flex flex-row') + (comOpen ? ' hidden' : ' block')}>

              <div className="flex flex-row mx-2 text-xs py-3 hover:text-blue ">
                <p className="mx-1 pb-2">{likes ? likes.count : 'wait ...'}</p>
                <FontAwesomeIcon icon={faHeart} size={'lg'} className="text-red py-auto"/>
              </div>

              {likes?.isLiked
                  ? <DislikeButton bdaPostId={id} likes={likes} onPost={newDislike}/>
                  : <LikeButton bdaPostId={id} likes={likes} onPost={newLike}/>}
            </div>
          </div>
          <DateComponent date={createdAt} />
        </div>
      </div>
    </div>

  )
}

export default Comment
