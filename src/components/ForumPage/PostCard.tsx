import { FunctionComponent, useState } from 'react'
import DateComponent from '../WelcomePage/DateComponent'

interface Props {
  title: string;
  content: string;
  createdAt?: Date;
  id: string;
  topicID:string
}

const PostCard: FunctionComponent<Props> = ({ title, content, createdAt, id, topicID }) => {
  return (
    <>
      <div className="bg-white w-4/6 flex flex-col m-6">
        <div className=" border-blue border-4 shadow">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{content}</p>
            <DateComponent date={createdAt} />

          </div>
        </div>
      </div>
    </>
  )
}

export default PostCard
