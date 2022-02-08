
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { FunctionComponent, useState } from 'react'
import { postBdaPost } from '../../services/post.service'

interface Values {
  title: string;
  content: string;
}

const BdaPostForm:FunctionComponent = () => {
  const [succes, setSuccess] = useState(false)
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white text-left border-4 border-red overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4" id="modal-title">
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
                            className="px-3 py-3 placeholder-gray-400 bg-white text-gray-400 text-sm focus:outline-none focus:ring w-full border border-black"
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default BdaPostForm
