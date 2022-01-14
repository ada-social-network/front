import { FunctionComponent } from 'react'

interface Props {
  title: string;
  id: string
}

const TopicTitle: FunctionComponent<Props> = ({ title, id }) => {
  return (
    <>
      <div className="bg-white min-w-full flex flex-col m-6">
        <div className=" border-blue border-4 shadow">
          <a href="#">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{title}</div>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default TopicTitle
