import { FunctionComponent, useEffect, useState } from 'react'
import DateComponent from './DateComponent'
import CommentButton from './CommentButton'
import { getBdaPostLikes } from '../../services/post.service'
import LikeButton from './LikeButton'
import DislikeButton from './DislikeButton'
import { useUserContext } from '../../context/userContext'
import { getCurrentUser, getUser, User } from '../../services/user.service'

interface Props {
  title?: string;
  content: string;
  createdAt?: Date;
  id: string
}

interface Like {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: null | Date;
  userId: string;
  bdapostId: string;
}
interface LikeList {
    items: [Like];
    count: number;
    isLiked : boolean;
}

function findLikeId (bdaPostId: string, userId:string | undefined, likes :[Like]) {
  const like = likes.find(like => {
    return like.bdapostId === bdaPostId && like.userId === userId
  })
  if (like !== undefined) return like.id
}

const BdaPostCard: FunctionComponent<Props> = ({ title, content, createdAt, id }) => {
  const [likes, setLikes] = useState<LikeList>()
  const [userLikeId, setUserLikeId] = useState<string>()
  const [user, setUser] = useState<User>()

  useEffect(() => {
    getCurrentUser().then((response) => {
      setUser(response)
    })
    getBdaPostLikes(id)
      .then((likes) => {
        /* setUserLike(isLikedByUser(id, user.id, likes.items)) */
        setLikes(likes)
        setUserLikeId(findLikeId(id, user?.id, likes.items))
      }
      )
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          console.log(error.request)
        } else {
          console.log('Error', error.message)
        }
        console.log(error.config)
      })
  }, [])

  if (!title) title = 'Pas de titre :('
  return (
    <>
      <div className="bg-white w-4/6 flex flex-col m-6">
        <div className="border-blue border-4 shadow">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title + id}</div>
            <p className="text-gray-700 text-base">{content}</p>
            <DateComponent date={createdAt} />
            <CommentButton bdaPostId={id}/>

            <p>{likes ? likes.count : 'wait ...'}</p>
            { likes?.isLiked
              ? <DislikeButton bdaPostId={id} likeId={userLikeId} onPost={() => { }}/>
              : <LikeButton bdaPostId={id} onPost={() => { }}/>}):
          </div>
        </div>
      </div>
    </>
  )
}

export default BdaPostCard
