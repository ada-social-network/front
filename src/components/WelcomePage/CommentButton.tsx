import React, { FunctionComponent, useEffect, useState } from 'react'
import { getBdaPostComments } from '../../services/post.service'
import Comment from './Comment'
import CommentForm from './CommentForm'

export interface IComment {
  id: string,
  content: string,
  userId: string,
  bdapostId: string,
  createdAt?: Date,
  updatedAt?: Date,
  deletedAt?: Date
}

type CommentList = IComment[]

type Props = {
  bdaPostId: string
}

const CommentButton: FunctionComponent<Props> = ({ bdaPostId }) => {
  const [comments, setComments] = useState<CommentList>([])

  const newComment = (response : IComment) => {
    setComments([response, ...comments])
  }

  useEffect(() => {
    getBdaPostComments(bdaPostId)
      .then((comments) => {
        setComments(comments.reverse())
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
        setComments([])
      })
  }, [])
  const [showComments, setShowComments] = React.useState(false)
  const openComments = () => {
    setShowComments(true)
  }
  const closeComments = () => {
    setShowComments(false)
  }

  return (
    <div>
      <button
        className="max-w-10 bg-blue text-white text-xs px-6 py-3 rounded hover:shadow-lg "
        type="button"
        onClick={() => {
          showComments
            ? closeComments()
            : openComments()
        }}
      >
        Commentaires
      </button>
      <div className="flex flex-col">
        <div
          className={
            (showComments ? 'block ' : 'hidden ') +
            ('bg-white ' + 'text-base float-left py-2 list-none text-left rounded shadow-lg mt-1')
          }
          style={{ minWidth: '12rem' }}
        >
          <ul>
            <li className="border-b mx-6">
              <CommentForm bdaPostId={bdaPostId} onPost={newComment}/>
            </li>
            <li>
              {comments.length > 0
                ? comments.map((comment, i) => {
                  return <Comment key={i} {...comment} />
                })
                : <p>Zero commentaire ...</p>
              }
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CommentButton
