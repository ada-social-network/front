import { Formik, Field, Form, FormikHelpers } from 'formik'
import { FunctionComponent, useState } from 'react'
import { postCategory } from '../../../services/admin.service'

interface Values {
  name: string;
}

const PostCategoryForm:FunctionComponent = () => {
  const [succes, setSuccess] = useState(false)
  return (
    <div className="border-4 border-blue rounded-md px-2 py-3">
      <div >
        {!succes
          ? (<Formik
            initialValues={{
              name: ''
            }}
            onSubmit={(
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
            ) => {
              postCategory(values)
                .then((response) => {
                  setSuccess(true)
                  console.log(response)
                })
              setSubmitting(false)

              setSuccess(false)
            }}
          >
            <Form>
              <div className="flex flex-col">
                <label className="my-2" htmlFor="title">
                Nom de la catégorie
                </label>
                <div className="px-4 mt-4 py-3 flex flex-row align-center">
                  <Field
                    className="px-3 py-3 placeholder-gray-400 bg-white text-gray-400 text-sm focus:outline-none focus:ring w-full border border-black"
                    id="name"
                    name="name"
                    placeholder="Le nom"
                  />

                  <button
                    className="bg-white text-black active:bg-gray-700 font-bold px-6 mx-6 py-3 border-2 border-black hover:shadow-lg outline-none focus:outline-none mb-1 w"
                    type="submit"
                  >
                Poster
                  </button>
                </div>
              </div>
            </Form>
          </Formik>)
          : 'Merci pour votre post :)' }
      </div>
    </div>
  )
}

export default PostCategoryForm
