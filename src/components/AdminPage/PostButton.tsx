import { FunctionComponent, ReactElement, useState } from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface PostButtonProps {
 title : string;
 form : ReactElement;
 onClose: ()=> void;

}

const PostButton: FunctionComponent<PostButtonProps> = ({ title, form, onClose }) => {
  const [showForm, setShowForm] = useState(false)
  const openForm = () => {
    setShowForm(true)
  }
  const closeForm = () => {
    setShowForm(false)
    onClose()
  }

  return (
    <div>
      <button
        className="max-w-10 bg-blue mx-2 text-white text-xs px-6 py-3 rounded hover:shadow-lg m-2"
        type="button"
        onClick={() => {
          showForm
            ? closeForm()
            : openForm()
        }}
      >
        {showForm ? <FontAwesomeIcon icon={faTimes} size='lg'/> : title }
      </button>
      <div className="flex flex-col justify">
        <div
          className={
            (showForm ? 'block ' : 'hidden ') +
            ('bg-white ' + 'text-base py-2 list-none text-left rounded ')
          }
          style={{ minWidth: '12rem' }}
        >
          {form}
        </div>
      </div>
    </div>
  )
}

export default PostButton
