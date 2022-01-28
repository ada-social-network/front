import { FunctionComponent } from 'react'
import { postBdaPostLike } from '../../services/post.service'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props ={
  bdaPostId : string,
  onPost : () => void,
}
const LikeButton: FunctionComponent<Props> = ({ bdaPostId, onPost }) => {
  return (
    <div>
      <button
        onClick={() => {
          postBdaPostLike(bdaPostId).then((response) => {
            onPost()
          })
        }}
      > <FontAwesomeIcon icon={faThumbsUp}/> J'aime </button>
    </div>
  )
}

export default LikeButton
