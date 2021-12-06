import { Formik, Field, Form, FormikHelpers } from 'formik'
import { FunctionComponent, useEffect, useState } from 'react'
import { useUserContext } from '../../context/userContext'
import { postBdaComment } from '../../services/post.service'

interface Values {
 bdapost_id: number;
 content: string;
 user_id: number;
}

type Props ={
 bdaPostId : number,
}
const CommentForm: FunctionComponent<Props> = ({ bdaPostId }) => {
  const { user } = useUserContext()
  const [userID, setUserID] = useState<number>(0)
  useEffect(() => {
    setUserID(user.ID)
  }, [user])

  return (
    <div>
      {userID !== 0
        ? (
          <Formik
            initialValues={{
              bdapost_id: bdaPostId,
              content: '',
              user_id: userID
            }}
            onSubmit={(
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
            ) => {
              postBdaComment(values)
                .then((response) => {

                })
              setSubmitting(false)
            }}
          >

            <div className="bg-gray-100 dark:bg-gray-700 rounded-3xl px-4 pt-2 pb-2.5">
              <div className="text-normal leading-snug md:leading-normal">

                <Form>
                  <div className="mt-3 pt-0">
                    <Field
                      className="hidden"
                      id="user_id"
                      name="user_id"
                      value ={userID}
                    />
                    <Field
                      className="px-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-100 rounded text-sm outline-none"
                      id="content"
                      name="content"
                      placeholder="Mon message à la plèbe"
                    />

                  </div>

                  <button
                    className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-lightBlue-600 bg-Blue uppercase last:mr-0 mr-1"
                    type="submit"
                  >
       Poster
                  </button>

                </Form>
              </div>
            </div>

          </Formik>)
        : 'Attendez 5 secondes'}

    </div>
  )
}

export default CommentForm
