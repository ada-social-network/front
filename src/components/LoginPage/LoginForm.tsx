
import { useState, FunctionComponent } from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Field, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import { login } from '../../services/auth.service'

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
    message: 'Connexion réussie',
    type: 'success'
  },
  incorrect: {
    message: 'E-mail ou mot de passe inconnu',
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

  const initialValues = {
    email: '',
    password: ''
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Ce champs est obligatoire'),
    password: Yup.string().required('Ce champs est obligatoire')
  })

  const handleLogin = (FormValues: { email: string; password: string }) => {
    const { email, password } = FormValues
    login(email, password)
      .then(() => {
        setFormStatus(formStatusProps.success)
        setTimeout(redirectWelcome, 1000)
      }
      )
      .catch(function (error) {
        const response = error.response
        if (
          response.data.message === 'incorrect Username or Password' &&
              response.status === 401
        ) {
          setFormStatus(formStatusProps.incorrect)
        } else {
          setFormStatus(formStatusProps.error)
        }
        location.reload()
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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      {(props: FormikProps<FormValues>) => {
        const {
          values,
          touched,
          errors,
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
                      error={
                        !!(errors.email && touched.email)
                      }
                    />
                    {errors.email && touched.email
                      ? <div className="text-xs text-red">{errors.email}</div>
                      : ''}
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
                      error={
                        !!(errors.password && touched.password)
                      }
                    />
                    {errors.password && touched.password
                      ? <div className="text-xs text-red">{errors.password}</div>
                      : ''}
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
