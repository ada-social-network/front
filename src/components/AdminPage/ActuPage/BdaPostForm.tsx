
import { Formik, Field, Form } from 'formik'
import { FunctionComponent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { postBdaPost } from '../../../services/post.service'
interface Values {
  title: string;
  content: string;
}

interface FormStatus {
  message: string
  type: string
}
interface FormStatusProps {
  [key: string]: FormStatus
}

const formStatusProps: FormStatusProps = {
  success: {
    message: 'Message posté avec succès',
    type: 'success'
  },
  error: {
    message: 'Un problème est survenu',
    type: 'error'
  }
}

const BdaPostForm:FunctionComponent = () => {
  const history = useHistory()
  const redirectWelcome = () => {
    history.push('/')
  }

  const initialValues = {
    title: '',
    content: ''
  }

  const handlePost = (values: Values) => {
    postBdaPost(values)
      .then(() => {
        setFormStatus(formStatusProps.success)
        setTimeout(() => redirectWelcome(), 1500)
      })
      .catch(() => {
        setFormStatus(formStatusProps.error)
      })
      .finally(() => {
        setDisplayFormStatus(true)
      })
  }

  const [displayFormStatus, setDisplayFormStatus] = useState(false)
  const [formStatus, setFormStatus] = useState<FormStatus>({
    message: '',
    type: ''
  })

  return (
    <div className="border-4 border-blue rounded-md px-8 py-3 w-4/5 place-self-center">
      <div className="flex flex-col">
        <h3 className="text-lg leading-6 text-center font-medium text-gray-900 mb-4">
            Poster un message
        </h3>
        <div>
          <Formik
            initialValues={initialValues}
            onSubmit={handlePost}
          >
            <Form>
              <div className="flex flex-col">
                <label className="my-2" htmlFor="title">
                    Titre
                </label>
                <Field
                  as="textarea"
                  className="px-3 py-3 h-12 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring w-full border border-black"
                  id="title"
                  name="title"
                  placeholder="Mon titre"
                />
                <label className="my-2" htmlFor="content">
                    Message
                </label>
                <Field
                  as="textarea"
                  className="px-3 py-3 h-28 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring w-full border border-black"
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
              {displayFormStatus && (
                <div className="formStatus">
                  {formStatus.type === 'error'
                    ? (
                      <p>
                        {formStatus.message}
                      </p>
                    )
                    : formStatus.type === 'success'
                      ? (
                        <p>
                          {formStatus.message}
                        </p>
                      )
                      : null }
                </div>
              )}
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default BdaPostForm
