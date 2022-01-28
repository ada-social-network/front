import { FunctionComponent, useEffect, useState } from 'react'
import { useUserContext } from '../../context/userContext'
import { postBdaPostLike } from '../../services/post.service'
import { IComment } from './CommentButton'

type Props ={
  bdaPostId : string,
  onPost : () => void,
}
const LikeButton: FunctionComponent<Props> = ({ bdaPostId, onPost }) => {
  const { user } = useUserContext()
  const [userID, setUserID] = useState<string>('')
  useEffect(() => {
    setUserID(user.id)
  }, [user])

  return (
    <div>
      {userID !== ''
        ? (
          <button
            onClick={() => {
              postBdaPostLike(bdaPostId).then((response) => {
                console.log(response)
                onPost()
              })
            }}
          > Jaime </button>)
        : 'Attendez 5 secondes'}

    </div>
  )
}

export default LikeButton
