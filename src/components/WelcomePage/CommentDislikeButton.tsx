import { FunctionComponent } from 'react'
import { deleteLikeComment } from '../../services/post.service'
import { CommentLikeList } from './Comment'
import { FaHeart } from 'react-icons/fa'

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
      >< FaHeart size={18} className="text-red py-auto"/>

      </button>
    </div>
  )
}

export default CommentDislikeButton
