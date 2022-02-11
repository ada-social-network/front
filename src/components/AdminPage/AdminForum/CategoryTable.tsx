import { FunctionComponent, useEffect, useState } from 'react'
import { getCategories } from '../../../services/admin.service'
import { Category, CategoryList } from '../../ForumPage/ForumPage'
import CategoryRow from './CategoryRow'

const CategoryTable: FunctionComponent = () => {
  const [categories, setCategories] = useState<CategoryList>()

  useEffect(() => {
    getCategories()
      .then((response) => {
        setCategories(response)
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          console.log(error.request)
        } else {
          console.log('Error', error.message)
        }
        console.log(error.config)
      })
  }, [])

  return (
    <div className="flex flex-col">

      <div className="w-full  bg-white shadow-lg rounded-sm border border-gray-200">

        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Nom</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Id</div>
                  </th>

                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Administrer</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {categories !== undefined
                  ? categories.map((category, i) => {
                    return (
                      <CategoryRow key={i} {...category} />
                    )
                  })
                  : 'Il y a un problème ...'}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CategoryTable
