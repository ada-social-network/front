import { FunctionComponent, useState } from 'react'
import PostTopicForm from './PostTopicForm'

const PostTopicButton: FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleClose = () => {
    setIsModalOpen(false)
    window.location.reload()
  }
  return (
    <>
      <button className="max-w-10 bg-blue mx-2 text-white text-xs px-6 py-3 rounded hover:shadow-lg m-2" onClick={() => setIsModalOpen(!isModalOpen)}>
        <p> Créer un nouveau topic !</p>
      </button>

      {isModalOpen
        ? <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white text-left border-4 border-red overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4" id="modal-title">
                          Mon nouveau topic :
                    </h3>
                    <PostTopicForm onClose={handleClose}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        : null }

    </>
  )
}

export default PostTopicButton
