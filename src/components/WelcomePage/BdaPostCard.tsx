import { FunctionComponent, useState } from 'react'
import DateComponent from './DateComponent'
import CommentButton from './CommentButton'

interface Props {
  title?: string;
  content: string;
  CreatedAt?: Date;
  id: string
}

const BdaPostCard: FunctionComponent<Props> = ({ title, content, CreatedAt, id }) => {
  // const [comments, setComments] = useState()
  if (!title) title = 'Pas de titre :('
  return (
    <>
      <div className="bg-white w-4/6 flex flex-col m-6">
        <div className=" border-blue border-4 shadow">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title + id}</div>
            <p className="text-gray-700 text-base">{content}</p>
            <DateComponent date={CreatedAt} />
            <CommentButton bdaPostId={id}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default BdaPostCard
