import { FunctionComponent, useState } from 'react'
import DateComponent from './DateComponent'

interface Props {
  content: string;
  user_id: number;
  CreatedAt?: Date;
  ID: number
}

const Comment: FunctionComponent<Props> = ({ user_id, content, CreatedAt, ID }) => {
  return (

    <div className="bg-white w-5/6 flex flex-row w-full mx-6">

      <div className="bg-white dark:bg-gray-800 text-black dark:text-gray-200 p-4 antialiased flex max-w-lg">
        <img className="rounded-full h-8 w-8 mr-2 mt-1 " src="https://picsum.photos/id/1027/200/200"/>
        <div>
          <div className="bg-gray-100 dark:bg-gray-700 rounded-3xl px-4 pt-2 pb-2.5">
            <div className="font-semibold text-sm leading-relaxed">Jon num{user_id}</div>
            <div className="text-normal leading-snug md:leading-normal">
              {content}
            </div>
            <DateComponent date={CreatedAt} />
          </div>

        </div>
      </div>
    </div>

  )
}

export default Comment
