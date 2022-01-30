import { FunctionComponent } from 'react'

interface Props {
  content: string;
  title: string;
  id: string
}

const TopicTitle: FunctionComponent<Props> = ({ title, id, content }) => {
  return (
    <>
      <div className="bg-white min-w-full flex flex-col m-6">
        <div className=" border-blue border-2 shadow-small rounded-md">
          <a href={`/forum/topics/${id}`}>
            <div className="px-6 py-4">
              <div className="font-bold text-lg mb-1">{title}</div>
              <div className="text-gray-500 mb-1">{content}</div>
            </div>
          </a>
        </div>
      </div>
    </>

  )
}

export default TopicTitle
