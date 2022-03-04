import { FunctionComponent, useEffect, useState } from 'react'
import DateComponent from './DateComponent'
import CommentButton from './CommentButton'
import { getBdaPostLikes } from '../../services/post.service'
import { deleteBdaPost } from '../../services/admin.service'
import LikeButton from './LikeButton'
import DislikeButton from './DislikeButton'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DeleteForm from '../AdminPage/DeleteForm'

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
  bdaPostId: string;
}
export type LikeList = {
    items: Like[];
    count: number;
    isLikedByCurrentUser : boolean;
}

const BdaPostCard: FunctionComponent<Props> = ({ title, content, createdAt, id }) => {
  const [likes, setLikes] = useState<LikeList>()
  const [comOpen, setComIsOpen] = useState<boolean>(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const handleDeleteClose = () => {
    setIsDeleteOpen(false)
    window.location.reload()
  }

  const newLike = (response : Like, likes : LikeList) => {
    likes.items.push(response)
    setLikes({ items: likes.items, count: likes.count + 1, isLikedByCurrentUser: true })
  }

  const newDislike = (userId : string, likes : LikeList) => {
    const newItems = likes.items.filter((item) => item.userId !== userId)
    setLikes({ items: newItems, count: likes.count - 1, isLikedByCurrentUser: false })
  }

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
      })
  }, [])

  if (!title) title = 'Pas de titre :('
  return (
    !isDeleteOpen
      ? <>
        <div className="bg-white w-4/6 flex flex-col m-6">
          <div className="border-blue border-4 shadow-small rounded-md">
            <div className="px-6 py-4">

              <div className='flex flex-row place-content-between'>
                <div className="font-bold text-xl mb-2">{title}</div>
                {/* <div className="text-lg text-center flex-col"> */}
                <button
                  className="max-w-10 mx-2 text-gray hover:text-red"
                  type="button"
                  onClick={() => setIsDeleteOpen(!isDeleteOpen)}
                >
                    Supprimer
                </button>
                {/* </div> */}
              </div>
              <p className="text-gray-700 text-base">{content}</p>
              <DateComponent date={createdAt} />
            </div>

            <div className={('px-6 py-4 flex') + (comOpen ? ' flex-col' : ' flex-row')}>

              <CommentButton bdaPostId={id} onOpen={() => setComIsOpen(!comOpen)}/>
              <div className={('flex flex-row') + (comOpen ? ' hidden' : ' block')}>

                <div className="flex flex-row mx-2 text-xs py-3 hover:text-blue ">
                  <p className="mx-1 pb-2">{likes ? likes.count : 'wait ...'}</p>
                  <FontAwesomeIcon icon={faHeart} size={'lg'} className="text-red py-auto"/>
                </div>

                {likes?.isLikedByCurrentUser
                  ? <DislikeButton bdaPostId={id} likes={likes} onPost={newDislike}/>
                  : <LikeButton bdaPostId={id} likes={likes} onPost={newLike}/>}
              </div>
            </div>
          </div>
        </div>
      </>
      : <DeleteForm onClose={handleDeleteClose} idToDelete={id} nameToDelete={title} onDelete={deleteBdaPost} />
  )
}

export default BdaPostCard
