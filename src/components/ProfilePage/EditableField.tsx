import { FunctionComponent, useState } from 'react'
import { useUserContext } from '../../context/userContext'
import { updateUser } from '../../services/user.service'

interface Props {
  name: string
  attribute: string | undefined
  setAttribute: (arg0: string) => void
  objectToSubmit: object
  toShow: string | undefined
}

const EditableField: FunctionComponent<Props> = ({ name, attribute, setAttribute, objectToSubmit, toShow }) => {
  const { user } = useUserContext()
  const [editAttribute, setEditAttribute] = useState(false)

  const handleSubmit = (value: object) => {
    updateUser(user.id, value)
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div className="px-6 py-4">
      <div className='flex flex-row space-x-4'>
        <div className="font-bold text-xl">{name}</div>
        <button
          className='text-blue'
          onClick={() => setEditAttribute(true)}
        >
          Modifier
        </button>
      </div>
      <div className="my-1">
        {editAttribute
          ? (
            <form
              className='grid'
              onSubmit={() => handleSubmit(objectToSubmit)}
            >
              <textarea
                className="w-full h-16 border-2 border-blue text-gray-800"
                value={attribute}
                onChange={(event) => setAttribute(event.target.value)}
              />
              <button
                className='p-1 active:bg-gray-700 font-bold border-2 border-black hover:shadow-lg outline-none focus:outline-none my-3 place-self-end'
                type="submit"
              >
              Enregistrer
              </button>
            </form>
          )
          : (
            <p className="w-full">{toShow}</p>
          )}
      </div>
    </div>
  )
}

export default EditableField
