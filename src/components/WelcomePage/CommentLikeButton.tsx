import { FunctionComponent } from 'react'
import { postCommentLike } from '../../services/post.service'
import { CommentLike, CommentLikeList } from './Comment'
import { FaRegHeart } from 'react-icons/fa'

type Props ={
    commentId : string,
    onPost : (response : CommentLike, likes : CommentLikeList) => void,
    likes : CommentLikeList | undefined
}
const LikeButton: FunctionComponent<Props> = ({ commentId, onPost, likes }) => {
  return (
      <div>
      <button
        onClick={() => {
          postCommentLike(commentId).then((response) => {
            if (likes !== undefined) {
              onPost(response.data, likes)
            }
          })
        }}
      > < FaRegHeart size={18} className="text-red py-auto"/>
      </button>
    </div>
  )
}

export default LikeButton
