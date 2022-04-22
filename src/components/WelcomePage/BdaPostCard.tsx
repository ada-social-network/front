import { FunctionComponent, useEffect, useState } from 'react'
import DateComponent from './DateComponent'
import CommentButton from './CommentButton'
import { getBdaPostLikes, Like, LikeList, BdaPost, deleteBdaPost } from '../../services/post.service'
import LikeButton from './LikeButton'
import DislikeButton from './DislikeButton'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DeleteForm from '../AdminPage/DeleteForm'
import ModifyForm from './ModifyForm'

interface Props {
  post: BdaPost
}

const BdaPostCard: FunctionComponent<Props> = ({ post }) => {
  const [likes, setLikes] = useState<LikeList>()
  const [comOpen, setComIsOpen] = useState<boolean>(false)

  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const handleDeleteClose = () => {
    setIsDeleteOpen(false)
  }

  const [isModifyOpen, setIsModifyOpen] = useState(false)
  const handleModifyClose = () => {
    setIsModifyOpen(false)
  }

  const newLike = (response : Like, likes : LikeList) => {
    likes.items.push(response)
    setLikes({ items: likes.items, count: likes.count + 1, isLikedByCurrentUser: true })
  }

  const newDislike = (userId : string, likes : LikeList) => {
    const newItems = likes.items.filter((item) => item.userId !== userId)
    setLikes({ items: newItems, count: likes.count - 1, isLikedByCurrentUser: false })
  }

  const [isReadMore, setIsReadMore] = useState(true)
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }

  useEffect(() => {
    getBdaPostLikes(post.id)
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

  if (isModifyOpen) {
    return (<ModifyForm onClose={handleModifyClose} postToUpdate={post}/>)
  } else if (isDeleteOpen) {
    return (<DeleteForm onClose={handleDeleteClose} idToDelete={post.id} nameToDelete={post.title} onDelete={deleteBdaPost} />)
  } else {
    return (
      <>
        <div className="bg-white w-4/6 flex flex-col m-6">
          <div className="border-blue border-4 shadow-small rounded-md">
            <div className="px-6 py-4">
              <div className='flex flex-row place-content-between'>
                <div className="font-bold text-xl pt-2">{post.title}</div>
                <div>
                  <button
                    className="w-20 mx-2 text-gray border-2 border-black p-1 rounded hover:text-red hover:border-red"
                    type="button"
                    onClick={() => setIsModifyOpen(!isModifyOpen)}
                  >
                  Modifier
                  </button>
                  <button
                    className="w-20 mx-2 text-gray border-2 border-black p-1 rounded hover:text-red hover:border-red"
                    type="button"
                    onClick={() => setIsDeleteOpen(!isDeleteOpen)}
                  >
                  Supprimer
                  </button>
                </div>
              </div>
              {post.content.length > 800
                ? (
                  <p className='pt-2'>
                    {isReadMore ? post.content.slice(0, 650) : post.content}
                    <span onClick={toggleReadMore} className="text-blue cursor-pointer hover:underline">
                      {isReadMore
                        ? '  voir plus'
                        : '  voir moins'
                      }
                    </span>
                  </p>
                )
                : (<p className='pt-2'>{post.content}</p>)
              }
              <DateComponent date={post.createdAt} />
            </div>

            <div className={('px-6 py-4 flex') + (comOpen ? ' flex-col' : ' flex-row')}>
              <CommentButton bdaPostId={post.id} onOpen={() => setComIsOpen(!comOpen)}/>
              <div className={('flex flex-row') + (comOpen ? ' hidden' : ' block')}>
                <div className="flex flex-row mx-2 text-xs py-3 hover:text-blue">
                  <p className="mx-1 pb-2">{likes ? likes.count : 'wait ...'}</p>
                  <FontAwesomeIcon icon={faHeart} size={'lg'} className="text-red py-auto"/>
                </div>

                {likes?.isLikedByCurrentUser
                  ? <DislikeButton bdaPostId={post.id} likes={likes} onPost={newDislike}/>
                  : <LikeButton bdaPostId={post.id} likes={likes} onPost={newLike}/>}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default BdaPostCard
