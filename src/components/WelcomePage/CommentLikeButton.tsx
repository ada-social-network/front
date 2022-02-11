import { FunctionComponent } from 'react'
import { postCommentLike } from '../../services/post.service'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CommentLike, CommentLikeList } from './Comment'

type Props ={
    commentId : string,
    onPost : (response : CommentLike, likes : CommentLikeList) => void,
    likes : CommentLikeList | undefined
}
const LikeButton: FunctionComponent<Props> = ({ commentId, onPost, likes }) => {
  return (
    <div>
      <button
        className="max-w-10 bg-pink text-white text-xs px-6 mx-2 py-3 rounded hover:shadow-lg "
        onClick={() => {
          postCommentLike(commentId).then((response) => {
            if (likes !== undefined) {
              onPost(response.data, likes)
            }
          })
        }}
      > <FontAwesomeIcon icon={faThumbsUp}/> J'aime </button>
    </div>
  )
}

export default LikeButton
