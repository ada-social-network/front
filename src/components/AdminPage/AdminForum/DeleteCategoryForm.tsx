import { FunctionComponent, useState } from 'react'
import { deleteCategory } from '../../../services/admin.service'

import { Category } from '../../ForumPage/ForumPage'

interface Props {
  categoryToDelete: Category,
  onClose: () => void,
}

const DeleteCategoryForm:FunctionComponent<Props> = ({ onClose, categoryToDelete }) => {
  const [isDeleted, setIsDeleted] = useState<boolean>(false)
  const deleteCategoryForEver = () => {
    deleteCategory(categoryToDelete.id).then(() => {
      setIsDeleted(true)
      setTimeout(onClose, 1000)
    }
    ).catch((resp: any) => {
      console.log(resp)
    })
  }
  return (

    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true">
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div className="inline-block align-bottom bg-white text-left border-4 border-blue rounded-md overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full"></div>
                {!isDeleted
                  ? (<div className="flex flex-col">
                    <p>Etes vous sûr.e.s de vouloir supprimer la catégorie {categoryToDelete.name} ?</p>
                    <div className="px-4 mt-4 py-3 flex flex-inline align-center">
                      <button
                        type="button"
                        className="bg-red text-white active:bg-gray-700 font-bold px-6 mx-6 py-3 border-2 border-black hover:shadow-lg outline-none focus:outline-none mb-1 w-full"
                        onClick={onClose}
                      >
                Annuler
                      </button>
                      <button
                        className="bg-white text-black active:bg-gray-700 font-bold px-6 mx-6 py-3 border-2 border-black hover:shadow-lg outline-none focus:outline-none mb-1 w-full"
                        onClick={deleteCategoryForEver}
                      >
                Supprimer
                      </button>
                    </div>
                  </div>)
                  : 'Category supprimée avec succès ! Bye bye les losers !'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteCategoryForm
