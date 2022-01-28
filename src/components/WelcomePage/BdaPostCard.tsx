import { FunctionComponent, useEffect, useState } from 'react'
import DateComponent from './DateComponent'
import CommentButton from './CommentButton'
import { getBdaPostLikes } from '../../services/post.service'
import LikeButton from './LikeButton'

interface Props {
  title?: string;
  content: string;
  createdAt?: Date;
  id: string
}

interface Like {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: null | Date;
  userId: string;
  bdapostId: string;
}
interface LikeList {
    items: [Like];
    count: number
}

const BdaPostCard: FunctionComponent<Props> = ({ title, content, createdAt, id }) => {
  const [likes, setLikes] = useState<LikeList>()

  useEffect(() => {
    getBdaPostLikes(id)
      .then((likes) => {
        setLikes(likes)
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          console.log(error.request)
        } else {
          console.log('Error', error.message)
        }
        console.log(error.config)
        setLikes(undefined)
      })
  }, [])

  if (!title) title = 'Pas de titre :('
  return (
    <>
      <div className="bg-white w-4/6 flex flex-col m-6">
        <div className="border-blue border-4 shadow">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title + id}</div>
            <p className="text-gray-700 text-base">{content}</p>
            <DateComponent date={createdAt} />
            <CommentButton bdaPostId={id}/>
            <p>{likes ? likes.items : 'oups'}</p>
            <LikeButton bdaPostId={id} onPost={() => { console.log('hihi') }}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default BdaPostCard
