import { Formik, Field, Form, FormikHelpers } from 'formik'
import { FunctionComponent, useEffect, useState } from 'react'
import { useUserContext } from '../../context/userContext'
import { postBdaComment } from '../../services/post.service'
import { IComment } from './CommentButton'

interface Values {
 bdapost_id: string;
 content: string;
 user_id: string;
}

type Props ={
 bdaPostId : string,
 onPost : (response: IComment) => void,
}
const CommentForm: FunctionComponent<Props> = ({ bdaPostId, onPost }) => {
  const { user } = useUserContext()
  const [userID, setUserID] = useState<string>("")
  useEffect(() => {
    setUserID(user.ID)
  }, [user])

  return (
    <div>
      {userID !== ""
        ? (
          <Formik
            enableReinitialize={true}
            initialValues={{
              bdapost_id: bdaPostId,
              content: '',
              user_id: userID
            }}
            onSubmit={(
              values: Values,
              actions: FormikHelpers<Values>

            ) => {
              postBdaComment(values).then((response) => {
                actions.setSubmitting(false)
                actions.resetForm()
                onPost(response.data)
              })
            }}
          >

            <div className="rounded-3xl ">

              <Form>
                <div className="m-4 flex">
                  <Field
                    className="hidden"
                    id="user_id"
                    name="user_id"
                    value ={userID}
                  />
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

          </Formik>)
        : 'Attendez 5 secondes'}

    </div>
  )
}

export default CommentForm
