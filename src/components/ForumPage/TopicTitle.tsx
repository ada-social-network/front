import { FunctionComponent, useState } from 'react'
import DeleteForm from '../AdminPage/DeleteForm'
import { Topic } from './TopicPage'
import { deleteTopic } from '../../services/post.service'
import ModifyTopic from './ModifyTopic'

interface Props{
  topic: Topic
}

const TopicTitle: FunctionComponent<Props> = ({ topic }) => {
  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const handleModifyClose = () => {
    setIsModifyModalOpen(false)
    window.location.reload()
  }

  const handleDeleteClose = () => {
    setIsDeleteModalOpen(false)
    window.location.reload()
  }

  if (isModifyModalOpen) {
    return (<ModifyTopic onClose={handleModifyClose} topicToUpdate={topic}/>)
  } else if (isDeleteModalOpen) {
    return (<DeleteForm onClose={handleDeleteClose} idToDelete={topic.id} nameToDelete={topic.name} onDelete={deleteTopic}/>)
  } else {
    return (
      <>
        <div className="bg-white min-w-full flex flex-col m-6">
          <div className=" border-blue border-2 shadow-small rounded-md">
            <a href={`/forum/topics/${topic.id}`}>
              <div className="px-6 py-4">
                <div className="font-bold text-lg mb-1">{topic.name}</div>
                <div className="text-gray-500 mb-1">{topic.content}</div>
              </div>
            </a>
            <div className="text-lg text-center flex-col">
              <button
                className="max-w-10 bg-blue mx-2 text-white text-xs px-6 py-3 rounded hover:shadow-lg m-2"
                type="button"
                onClick={() => setIsModifyModalOpen(!isModifyModalOpen)}
              >
                                Modifier
              </button>
              <button
                className="max-w-10 bg-blue mx-2 text-white text-xs px-6 py-3 rounded hover:shadow-lg m-2"
                type="button"
                onClick={() => setIsDeleteModalOpen(!isDeleteModalOpen)}
              >
                                Supprimer
              </button>
            </div>
          </div>
        </div>
      </>

    )
  }
}
export default TopicTitle
