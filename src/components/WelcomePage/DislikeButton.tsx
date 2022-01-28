import { FunctionComponent } from 'react'
import { postBdaDeleteLike } from '../../services/post.service'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props ={
  bdaPostId : string,
  likeId : string
  onPost : () => void,
}
const DislikeButton: FunctionComponent<Props> = ({ bdaPostId, likeId, onPost }) => {
  return (
    <div>
      <button
        onClick={() => {
          if (likeId !== undefined) {
            postBdaDeleteLike(bdaPostId, likeId).then((response) => {
              onPost()
            })
          }
        }}
      > <FontAwesomeIcon icon={faThumbsDown}/> Je n'aime plus {likeId}</button>
    </div>
  )
}

export default DislikeButton
