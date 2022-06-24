import { Formik, Field, Form, FormikHelpers } from 'formik'
import { FunctionComponent } from 'react'
import { useParams } from 'react-router'
import { postPost } from '../../services/post.service'
import { Post } from './PostPage'

interface Values {
  content:string;
}

interface Props {
  onPost: (response : Post) => void
}

interface Params {
  id:string
}

const PostPostForm:FunctionComponent<Props> = ({ onPost }) => {
  const { id } = useParams<Params>()
  return (
    <div>

      <Formik
        initialValues={{
          content: ''
        }}
        enableReinitialize={true}

        onSubmit={(
          values: Values,
          actions: FormikHelpers<Values>
        ) => {
          postPost(id, values)
            .then((response) => {
              actions.setSubmitting(false)
              actions.resetForm()
              console.log(response)
              onPost(response.data)
            })
        }}
      >
        <div className="rounded-3xl ">

          <Form>
            <div className="m-4 flex">

              <Field
                className="rounded-l-lg p-4 bg-gray-100 border-t mr-0 border-b border-l text-gray-800 border-gray-200 w-full"
                id="content"
                name="content"
                placeholder="Mon message à la plèbe"
              />

              <button
                className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r"
                type="submit"
              >
      Poster
              </button>
            </div>
          </Form>
        </div>

      </Formik>

    </div>
  )
}

export default PostPostForm
