import { FunctionComponent, ReactElement, useState } from 'react'

interface PostButtonProps {
 title : string;
 onOpen : () => void;
 form : ReactElement

}

const PostButton: FunctionComponent<PostButtonProps> = ({ title, onOpen, form }) => {
  const [showForm, setShowForm] = useState(false)
  const openForm = () => {
    setShowForm(true)
    onOpen()
  }
  const closeForm = () => {
    setShowForm(false)
    onOpen()
  }

  return (
    <div>
      <button
        className="max-w-10 bg-blue mx-2 text-white text-xs px-6 py-3 rounded hover:shadow-lg "
        type="button"
        onClick={() => {
          showForm
            ? closeForm()
            : openForm()
        }}
      >
        {title}
      </button>
      <div className="flex flex-col justify">
        <div
          className={
            (showForm ? 'block ' : 'hidden ') +
            ('bg-white ' + 'text-base py-2 list-none text-left rounded shadow-lg mt-1')
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
