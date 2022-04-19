import { FunctionComponent } from 'react'
import { postBdaPostLike, Like, LikeList } from '../../services/post.service'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props ={
  bdaPostId : string,
  onPost : (response : Like, likes : LikeList) => void,
  likes :LikeList | undefined
}
const LikeButton: FunctionComponent<Props> = ({ bdaPostId, onPost, likes }) => {
  return (
    <div>
      <button
        className="max-w-10 bg-pink text-white text-xs px-6 mx-2 py-3 rounded hover:shadow-lg "
        onClick={() => {
          postBdaPostLike(bdaPostId).then((response) => {
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
