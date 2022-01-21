import { FunctionComponent, useState } from 'react'
import DateComponent from '../WelcomePage/DateComponent'

interface Props {
  content: string;
  createdAt?: Date;
  id: string;
  topicID:string
  userID:string
}

const PostCard: FunctionComponent<Props> = ({ content, createdAt, id, topicID, userID }) => {
  return (
    <div className="border-b border-red flex-col px-6 py-2 items-center flex-none">
      <div className="flex items-start mb-4 text-sm">

        <img src="https://pbs.twimg.com/profile_images/875010472105222144/Pkt9zqPY_400x400.jpg" className="w-10 h-10 rounded mr-3"/>
        <div className="flex-1 overflow-hidden">
          <div className="flex justify-between">
            <span className="font-bold">Steve Schoger</span>
            <span className="text-grey text-xs "><DateComponent date={createdAt} /></span>
          </div>
          <p className="text-black leading-normal">{content}</p>
        </div>
      </div>
    </div>
  )
}

export default PostCard
