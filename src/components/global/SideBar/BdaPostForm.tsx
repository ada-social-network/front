
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { FunctionComponent, useEffect, useState } from 'react'
import { useUserContext } from '../../../context/userContext'
import { postBdaPost } from '../../../services/post.service'

interface Values {
  title: string;
  content: string;
  user_id: string;
}

interface Props {
  onClose: () => void
}

const BdaPostForm:FunctionComponent<Props> = ({ onClose }) => {
  const { user } = useUserContext()
  const [userID, setUserID] = useState<string>('')
  useEffect(() => {
    setUserID(user.id)
  }, [user])
  const [succes, setSuccess] = useState(false)
  return (
    <div>
      {!succes && userID !== ''
        ? (<Formik
          initialValues={{
            title: '',
            content: '',
            user_id: userID // mettre l'id du user connecté
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
            setTimeout(onClose, 500)
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

export default BdaPostForm
