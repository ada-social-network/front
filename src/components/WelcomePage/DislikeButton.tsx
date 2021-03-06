import { FunctionComponent } from 'react'
import { postBdaDeleteLike, LikeList } from '../../services/post.service'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props ={
  bdaPostId : string,
  likes : LikeList,
  onPost : (userId : string, likes : LikeList) => void,
}

function findLikeId (bdaPostId: string, userId:string | null, likes :LikeList) {
  const like = likes.items.find(like => {
    return like.bdaPostId === bdaPostId && like.userId === userId
  })
  if (like !== undefined) return like.id
}

const DislikeButton: FunctionComponent<Props> = ({ bdaPostId, likes, onPost }) => {
  const cUserId = localStorage.getItem('current')
  const likeId = findLikeId(bdaPostId, cUserId, likes)
  return (
    <div>
      <button
        className="max-w-10 bg-pink text-white text-xs px-6 py-3 mx-2 rounded hover:shadow-lg "
        onClick={() => {
          if (likeId !== undefined) {
            postBdaDeleteLike(bdaPostId, likeId).then((response) => {
              if (cUserId !== null) {
                onPost(cUserId, likes)
              }
            })
          }
        }}
      > <FontAwesomeIcon icon={faThumbsDown}/> Je n&apos;aime plus </button>
    </div>
  )
}

export default DislikeButton
