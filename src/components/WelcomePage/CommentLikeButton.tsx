import { FunctionComponent } from 'react'
import { postCommentLike } from '../../services/post.service'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CommentLike, CommentLikeList } from './Comment'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

type Props ={
    commentId : string,
    onPost : (response : CommentLike, likes : CommentLikeList) => void,
    likes : CommentLikeList | undefined
}
const CommentLikeButton: FunctionComponent<Props> = ({ commentId, onPost, likes }) => {
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
      > <FontAwesomeIcon icon={['fas', 'heart']} size={'lg'} className="text-red py-auto"/>
      </button>
    </div>
  )
}

export default CommentLikeButton
