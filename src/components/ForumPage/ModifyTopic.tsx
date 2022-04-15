import { Formik, Field, Form, FormikProps } from 'formik'
import { FunctionComponent, useState } from 'react'
import { Topic } from './TopicPage'
import { updateTopic } from '../../services/post.service'

interface FormValues {
    name?: string | undefined
    content: string
}

interface Props {
    onClose: () => void,
    topicToUpdate: Topic
}

const ModifyTopic: FunctionComponent<Props> = ({ onClose, topicToUpdate }) => {
  const [formSent, setFormSent] = useState(false)
  const handleFormSent = () => {
    setFormSent(true)
  }
  const handleResetForm = () => {
    setFormSent(false)
  }

  const initialValues = {
    name: topicToUpdate.name,
    content: topicToUpdate.content
  }

  const handleSubmit = (values: FormValues) => {
    updateTopic(topicToUpdate.id, values)
      .then((response) => {
        handleFormSent()
        console.log(response)
      })

    onClose()
    window.location.reload()
    handleResetForm()
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog"
      aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true">
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true">&#8203;</span>
          <div
            className="inline-block align-bottom bg-white text-left border-4 border-blue rounded-md overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  {!formSent
                    ? (
                      <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                      >
                        {(props: FormikProps<FormValues>) => {
                          const {
                            values,
                            // touched,
                            // errors,
                            // handleBlur,
                            handleChange,
                            isSubmitting
                          } = props

                          return (
                            <Form>
                              <div className="flex flex-col">
                                <label className="my-2" htmlFor="name">
                                                                    Titre
                                </label>
                                <Field
                                  className="px-3 py-2 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring w-full border border-black"
                                  placeholder='Titre'
                                  value={values.name}
                                  onChange={handleChange}
                                  name="name"
                                />
                              </div>
                              <div className="my-2">
                                <label className="my-2" htmlFor="content">
                                                                    Message
                                </label>
                                <Field
                                  className="px-3 py-2 h-32 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring w-full border border-black"
                                  placeholder='Message'
                                  value={values.content}
                                  onChange={handleChange}
                                  as="textarea"
                                  name="content"
                                />
                              </div>
                              <div
                                className="px-4 mt-4 py-3 flex flex-inline align-center">
                                <button
                                  type="button"
                                  className="bg-red text-white active:bg-gray-700 font-bold px-6 mx-6 py-3 border-2 border-black hover:shadow-lg outline-none focus:outline-none mb-1 w-full"
                                  onClick={onClose}
                                >
                                                                    Annuler
                                </button>
                                <button
                                  className="bg-white text-black active:bg-gray-700 font-bold px-6 mx-6 py-3 border-2 border-black hover:shadow-lg outline-none focus:outline-none mb-1 w-full"
                                  type="submit"
                                  disabled={isSubmitting}
                                >
                                                                    Modifier
                                </button>
                              </div>
                            </Form>
                          )
                        }}
                      </Formik>)
                    : 'Merci pour votre Modification :)'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModifyTopic
