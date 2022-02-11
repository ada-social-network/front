
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { FunctionComponent, useState } from 'react'
import { postBdaPost } from '../../../services/post.service'

interface Values {
  title: string;
  content: string;
}

const BdaPostForm:FunctionComponent = () => {
  const [succes, setSuccess] = useState(false)
  return (
    <div className="border-4 border-blue rounded-md px-2 py-3">
      <div className="flex flex-col">
        <h3 className="text-lg leading-6 text-center font-medium text-gray-900 mb-4">
            Poster un message
        </h3>
        <div>
          {!succes
            ? (<Formik
              initialValues={{
                title: '',
                content: ''
              }}
              onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
              ) => {
                postBdaPost(values)
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
                Titre
                  </label>
                  <Field
                    as="textarea"
                    className="px-3 py-3 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring w-full border border-black"
                    id="title"
                    name="title"
                    placeholder="Le titre du post"
                  />
                  <label className="my-2" htmlFor="content">
                Message
                  </label>
                  <Field
                    as="textarea"
                    className="px-3 py-3 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring w-full border border-black"
                    id="content"
                    name="content"
                    placeholder="Mon message à la plèbe"
                  />
                </div>
                <div className="px-4 mt-4 py-3 flex flex-inline align-center">
                  <button
                    className="bg-white text-black active:bg-gray-700 font-bold px-6 mx-6 py-3 border-2 border-black hover:shadow-lg outline-none focus:outline-none mb-1 w-full"
                    type="submit"
                  >
                Poster
                  </button>
                </div>
              </Form>
            </Formik>)
            : 'Merci pour votre post :)' }
        </div>

      </div>
    </div>
  )
}

export default BdaPostForm
