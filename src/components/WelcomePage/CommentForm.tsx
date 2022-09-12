import { Formik, Field, Form, FormikHelpers } from 'formik'
import { FunctionComponent, useEffect, useState } from 'react'
import { useUserContext } from '../../context/userContext'
import { postBdaComment } from '../../services/post.service'
import { IComment } from './CommentButton'

interface Values {
  content: string;
}

type Props ={
  bdaPostId : string,
  onPost : (response: IComment) => void,
}
const CommentForm: FunctionComponent<Props> = ({ bdaPostId, onPost }) => {
  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={{
          content: ''
        }}
        onSubmit={(
          values: Values,
          actions: FormikHelpers<Values>

        ) => {
          postBdaComment(values, bdaPostId).then((response) => {
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
                placeholder="Ma réaction"
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

export default CommentForm
