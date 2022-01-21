import { Formik, Field, Form, FormikHelpers } from 'formik'
import { FunctionComponent, useState } from 'react'
import { useParams } from 'react-router'
import { postTopic } from '../../services/post.service'

interface Values {
  name: string;
  content : string
}

interface Props {
  onClose: () => void
}

interface Params {
  id: string
}

const PostCategoryForm:FunctionComponent<Props> = ({ onClose }) => {
  const [succes, setSuccess] = useState(false)
  const { id } = useParams<Params>()
  return (
    <div>
      {!succes
        ? (<Formik
          initialValues={{
            name: '',
            content: ''
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            postTopic(id, values)
              .then((response) => {
                setSuccess(true)
                console.log(response)
              })
            setSubmitting(false)
            setTimeout(onClose, 500)
            setSuccess(false)
          }}
        >
          <Form>
            <div className="flex flex-col">
              <label className="my-2" htmlFor="title">
                Nom du topic
              </label>
              <Field
                className="px-3 py-3 placeholder-gray-400 bg-white text-gray-400 text-sm focus:outline-none focus:ring w-full border border-black"
                id="name"
                name="name"
                placeholder="Le nom"
              />
            </div>
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
                type="submit"
              >
                Poster
              </button>
            </div>
          </Form>
        </Formik>)
        : 'Merci pour votre post :)' }
    </div>
  )
}

export default PostCategoryForm
