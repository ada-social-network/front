import { FunctionComponent } from 'react'
import { deleteLikeComment } from '../../services/post.service'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CommentLikeList } from './Comment'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

type Props = {
    commentId: string,
    likes: CommentLikeList,
    onPost: (userId: string, likes: CommentLikeList) => void,
}

function findLikeId (commentId: string, userId: string | null, likes: CommentLikeList) {
  const like = likes.items.find(like => {
    return like.commentId === commentId && like.userId === userId
  })
  if (like !== undefined) return like.id
}

const CommentDislikeButton: FunctionComponent<Props> = ({ commentId, likes, onPost }) => {
  const cUserId = localStorage.getItem('current')
  const likeId = findLikeId(commentId, cUserId, likes)
  return (
    <div>
      <button
        onClick={() => {
          if (likeId !== undefined) {
            deleteLikeComment(commentId, likeId).then((response) => {
              if (cUserId !== null) {
                onPost(cUserId, likes)
              }
            })
          }
        }}
      ><FontAwesomeIcon icon={faHeart} size={'lg'} className="text-red py-auto"/>

      </button>
    </div>
  )
}

export default CommentDislikeButton
