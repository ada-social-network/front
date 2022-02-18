import { FunctionComponent, useState } from 'react'
import { Category } from '../../ForumPage/ForumPage'
import DeleteCategoryForm from './DeleteCategoryForm'

const CategoryRow:FunctionComponent<Category> = ({ ...category }) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const handleDeleteClose = () => {
    setIsDeleteOpen(false)
    window.location.reload()
  }
  return (
    !isDeleteOpen
      ? (<tr>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center">

            <div className="font-medium text-gray-800">{category.name}</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left">{category.id}</div>
        </td>

        <td className="p-2 whitespace-nowrap">
          <div className="text-lg text-center flex-col">

            <button
              className="max-w-10 bg-blue mx-2 text-white text-xs px-6 py-3 rounded hover:shadow-lg m-2"
              type="button"
              onClick={() => setIsDeleteOpen(!isDeleteOpen)}
            >
              Supprimer
            </button>
          </div>
        </td>
      </tr>)
      : <DeleteCategoryForm onClose={handleDeleteClose} categoryToDelete={category}/>

  )
}

export default CategoryRow
