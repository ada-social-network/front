
import { useState, FunctionComponent } from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Field, Form, FormikProps, FormikHelpers } from 'formik'
import axios from 'axios'

interface FormValues {
  email: string
  password: string
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
    message: 'Signed up successfully.',
    type: 'success'
  },
  email: {
    message: 'E-mail inconnu.',
    type: 'error'
  },
  password: {
    message: 'Mot de passe incorrect',
    type: 'error'
  },
  error: {
    message: 'Un problème est survenu',
    type: 'error'
  }
}

const LoginForm: FunctionComponent = () => {
  const history = useHistory()
  const redirectRegister = () => {
    history.push('/registration')
  }
  const redirectWelcome = () => {
    history.push('/')
  }

  const [displayFormStatus, setDisplayFormStatus] = useState(false)
  const [formStatus, setFormStatus] = useState<FormStatus>({
    message: '',
    type: ''
  })

  const baseUrl = 'http://localhost:8080/auth/login'

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      onSubmit={(
        values: FormValues,
        { setSubmitting }: FormikHelpers<FormValues>
      ) => {
        axios.post<FormValues>(baseUrl, JSON.stringify(values))
          .then((response) => {
            setFormStatus(formStatusProps.success)
            setTimeout(() => { redirectWelcome() }, 1500)
          })
          .catch(function (error) {
            console.log(JSON.stringify(values))
            const response = error.response
            setSubmitting(false)
            if (
              response.data.message === 'wrong email' &&
              response.status === 400
            ) {
              setFormStatus(formStatusProps.email)
            } else if (
              response.data.message === 'wrong password' &&
              response.status === 400
            ) {
              setFormStatus(formStatusProps.password)
            } else {
              setFormStatus(formStatusProps.error)
            }
          })
          .finally(() => setDisplayFormStatus(true))
      }}
    >
      {(props: FormikProps<FormValues>) => {
        const {
          values,
          handleBlur,
          handleChange,
          isSubmitting
        } = props
        return (
          <div className="w-full lg:w-1/3 shadow">
            <div className="relative flex flex-col min-w-0 break-words bg-white border-4 border-red">
              <div className="w-full">
                <h3 className="my-4 text-center text-5xl font-extrabold">
                  Connexion
                </h3>
                <p className="font-extrabold text-center mb-2">
                  Entrez votre adresse mail et mot de passe
                </p>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <Form>
                  <div className="relative w-full mt-8 mb-5">
                    <Field
                      className="px-3 py-3 placeholder-black bg-white text-sm focus:outline-none focus:ring w-full border border-black"
                      name="email"
                      placeholder="Adresse e-mail"
                      value={values.email}
                      style={{ transition: 'all .15s ease' }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="relative w-full mb-4">
                    <Field
                      className="px-3 py-3 placeholder-black bg-white text-sm focus:outline-none focus:ring w-full border border-black"
                      name="password"
                      placeholder="Mot de passe"
                      value={values.password}
                      type="password"
                      style={{ transition: 'all .15s ease' }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                        style={{ transition: 'all .15s ease' }}
                      />
                      <span className="ml-2 text-sm font-semibold text-gray-700">
                        Se souvenir de moi
                      </span>
                    </label>
                  </div>
                  <div className="text-center mt-6 mb-10">
                    <button
                      className="bg-white text-black active:bg-gray-700 font-bold px-6 py-3 border-2 border-black hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                      type="submit"
                      disabled={isSubmitting}
                      style={{ transition: 'all .15s ease' }}
                    >
                      Connexion
                    </button>
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
                  </div>
                  <div className="flex flex-wrap mt-6">
                    <button className="w-1/2 text-gray-500" onClick={e => e.preventDefault()}>
                      <small>Mot de passe oublié ?</small>
                    </button>
                    <button className="w-1/2 text-right text-gray-500" onClick={redirectRegister}>
                      <small>Inscription</small>
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        )
      }}
    </Formik>
  )
}

export default LoginForm
