import { FunctionComponent } from 'react'
import { deleteLikeComment } from '../../services/post.service'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CommentLikeList } from './Comment'

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
        className="max-w-10 bg-pink text-white text-xs px-6 py-3 mx-2 rounded hover:shadow-lg "
        onClick={() => {
          if (likeId !== undefined) {
            deleteLikeComment(commentId, likeId).then((response) => {
              if (cUserId !== null) {
                onPost(cUserId, likes)
              }
            })
          }
        }}
      ><FontAwesomeIcon icon={faThumbsDown}/> Je n'aime plus
      </button>
    </div>
  )
}

export default CommentDislikeButton
