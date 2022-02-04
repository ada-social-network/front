import { FunctionComponent, useEffect, useState } from 'react'
import DateComponent from './DateComponent'
import CommentButton from './CommentButton'
import { getBdaPostLikes } from '../../services/post.service'
import LikeButton from './LikeButton'
import DislikeButton from './DislikeButton'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  title?: string;
  content: string;
  createdAt?: Date;
  id: string
}

export type Like = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: null | Date;
  userId: string;
  bdapostId: string;
}
export type LikeList = {
    items: Like[];
    count: number;
    isLiked : boolean;
}

const BdaPostCard: FunctionComponent<Props> = ({ title, content, createdAt, id }) => {
  const [likes, setLikes] = useState<LikeList>()
  const [comOpen, setComIsOpen] = useState<boolean>(false)

  const setIsOpen = () => {
    setComIsOpen(!comOpen)
  }

  const newLike = (response : Like, likes : LikeList) => {
    likes.items.push(response)
    setLikes({ items: likes.items, count: likes.count + 1, isLiked: true })
  }

  const newDislike = (userId : string, likes : LikeList) => {
    const newItems = likes.items.filter((item) => item.userId !== userId)
    setLikes({ items: newItems, count: likes.count - 1, isLiked: false })
  }

  useEffect(() => {
    getBdaPostLikes(id)
      .then((likes) => {
        setLikes(likes)
      }
      )
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
      })
  }, [])

  if (!title) title = 'Pas de titre :('
  return (
    <>
      <div className="bg-white w-4/6 flex flex-col m-6">
        <div className="border-blue border-4 shadow-small rounded-md">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{content}</p>
            <DateComponent date={createdAt} />
          </div>

          <div className={('px-6 py-4 flex') + (comOpen ? ' flex-col' : ' flex-row')}>

            <CommentButton bdaPostId={id} onOpen={setIsOpen}/>
            <div className={('flex flex-row') + (comOpen ? ' hidden' : ' block')}>

              <div className="flex flex-row mx-2 text-xs py-3 hover:text-blue ">
                <p className="mx-1 pb-2">{likes ? likes.count : 'wait ...'}</p>
                <FontAwesomeIcon icon={faHeart} size={'lg'} className="text-red py-auto"/>
              </div>

              {likes?.isLiked
                ? <DislikeButton bdaPostId={id} likes={likes} onPost={newDislike}/>
                : <LikeButton bdaPostId={id} likes={likes} onPost={newLike}/>}
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default BdaPostCard
