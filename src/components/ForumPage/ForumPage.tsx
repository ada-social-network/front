import { FunctionComponent, useEffect, useState } from 'react'
import { getCategories } from '../../services/admin.service'
import ForumTitle from './ForumTitle'

export interface Category {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  name : string
}

export type CategoryList = Category[];

const ForumPage:FunctionComponent = () => {
  const [categories, setCategories] = useState<CategoryList>()

  useEffect(() => {
    getCategories()
      .then((response) => {
        setCategories(response)
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response)
        } else if (error.request) {
          console.log(error.request)
        } else {
          console.log('Error', error.message)
        }
        console.log(error.config)
        setCategories([
          {
            id: '',
            name: "Désolé, il semblerait qu'une interférence ait été détectée sur notre réseau"
          }
        ])
      })
  }, [])
  console.log(categories)
  return (
    <div className=" item-center justify-center">
      {categories !== undefined
        ? categories.map((category, i) => {
          return <ForumTitle key={i} title={category.name} id={category.id}/>
        })
        : 'Loading...'
      }
    </div>
  )
}
export default ForumPage
