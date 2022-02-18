import { FunctionComponent, useEffect, useState } from 'react'
import DateComponent from './DateComponent'
import { getUser, User } from '../../services/user.service'
import { getCommentLikes } from '../../services/post.service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import CommentDislikeButton from './CommentDislikeButton'
import CommentLikeButton from './CommentLikeButton'

interface Props {
  content: string;
  userId: string;
  createdAt?: Date;
  id: string
}

export type CommentLike = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: null | Date;
  userId: string;
  commentId: string;
}

export type CommentLikeList = {
  items: CommentLike[];
  count: number;
  isLikedByCurrentUser : boolean;
}

const Comment: FunctionComponent<Props> = ({ userId, content, createdAt, id }) => {
  const [author, setAuthor] = useState<User|undefined>(undefined)
  const [likes, setCommentLikes] = useState<CommentLikeList>()

  const newCommentLike = (response : CommentLike, likes : CommentLikeList) => {
    likes.items.push(response)
    setCommentLikes({ items: likes.items, count: likes.count + 1, isLikedByCurrentUser: true })
  }

  const newCommentDislike = (userId : string, likes : CommentLikeList) => {
    const newItems = likes.items.filter((item) => item.userId !== userId)
    setCommentLikes({ items: newItems, count: likes.count - 1, isLikedByCurrentUser: false })
  }

  useEffect(() => {
    getCommentLikes(id)
      .then((likes) => {
        setCommentLikes(likes)
      })
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
            <div className="text-normal mx-2 leading-snug md:leading-normal min-w-3/4">
              {content}
            </div>
          </div>
          <div className="flex flex-row text-sm mt-2 my-auto justify-between">
            <div className ="flex flex-row text-gray-400 text-sm text-left ">
              {likes?.isLikedByCurrentUser
                ? <CommentDislikeButton commentId={id} likes={likes} onPost={newCommentDislike} />
                : <CommentLikeButton commentId={id} likes={likes} onPost={newCommentLike}/>}
                
           <p className="mx-1 pb-2">{likes ? likes.count : 'wait ...'}</p>
           
          </div>

          <div>
          <DateComponent date={createdAt} /> 
          </div>

          </div>
              
          </div>
        </div>
      </div>

  )
}

export default Comment