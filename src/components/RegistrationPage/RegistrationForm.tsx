
import { useState, FunctionComponent } from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Field, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import { register } from '../../services/auth.service'

interface FormValues {
  first_name: string
  last_name: string
  password: string
  confirmPassword: string
  email: string
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
    message: 'Votre inscription a été prise en compte',
    type: 'success'
  },
  duplicate: {
    message: 'Cet e-mail a déjà été utilisé',
    type: 'error'
  },
  error: {
    message: 'Une erreur est survenue',
    type: 'error'
  }
}

const RegistrationForm: FunctionComponent = () => {
  const history = useHistory()
  const redirectLogin = () => {
    history.push('/login')
  }
  const redirectWelcome = () => {
    history.push('/')
  }

  const [displayFormStatus, setDisplayFormStatus] = useState(false)
  const [formStatus, setFormStatus] = useState<FormStatus>({
    message: '',
    type: ''
  })

  const initialValues = {
    first_name: '',
    last_name: '',
    password: '',
    confirmPassword: '',
    email: ''
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required('Veuillez entrez une adresse mail valide'),
    last_name: Yup.string().required('Veuillez entrer votre nom'),
    first_name: Yup.string().required('Veuillez entrer votre prénom'),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
      )
      .required('required'),
    confirmPassword: Yup.string()
      .required('Requis')
      .test(
        'password-match',
        'Le mot de passe doit être identique',
        function (value) {
          return this.parent.password === value
        }
      )
  })

  const handleRegister = (values: FormValues) => {
    register(values)
      .then((response) => {
        setFormStatus(formStatusProps.success)
        setTimeout(() => { redirectWelcome() }, 1500)
      })
      .catch(function (error) {
        const response = error.response
        if (
          response.data.message === 'this email is already taken' &&
          response.status === 409
        ) {
          setFormStatus(formStatusProps.duplicate)
        } else {
          setFormStatus(formStatusProps.error)
        }
      })
      .finally(() => setDisplayFormStatus(true))
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleRegister}
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
                    Inscription
                </h3>
                <p className="font-extrabold text-center mb-2">
                    Entrez vos informations
                </p>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <Form>
                  <div className="relative w-full mt-8">
                    <Field
                      className="px-3 py-3 placeholder-black bg-white text-sm focus:outline-none focus:ring w-full border border-black"
                      id="last_name"
                      name="last_name"
                      placeholder="Nom"
                      value={values.last_name}
                      style={{ transition: 'all .15s ease' }}
                      error={
                        !!(errors.last_name && touched.last_name)
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.last_name && touched.last_name
                      ? <div className="text-xs text-red">{errors.last_name}</div>
                      : ''}
                  </div>
                  <div className="relative w-full mt-5">
                    <Field
                      className="px-3 py-3 placeholder-black bg-white text-sm focus:outline-none focus:ring w-full border border-black"
                      id="first_name"
                      name="first_name"
                      placeholder="Prenom"
                      value={values.first_name}
                      style={{ transition: 'all .15s ease' }}
                      error={
                        !!(errors.first_name && touched.first_name)
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.first_name && touched.first_name
                      ? <div className="text-xs text-red">{errors.first_name} </div>
                      : ''}
                  </div>
                  <div className="relative w-full mt-5">
                    <Field
                      className="px-3 py-3 placeholder-black bg-white text-sm focus:outline-none focus:ring w-full border border-black"
                      id="email"
                      name="email"
                      value={values.email}
                      placeholder="Adresse mail"
                      type="email"
                      style={{ transition: 'all .15s ease' }}
                      error={
                        !!(errors.email && touched.email)
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email
                      ? <div className="text-xs text-red">{errors.email}</div>
                      : ''}
                  </div>
                  <div className="relative w-full mt-5">
                    <Field
                      className="px-3 py-3 placeholder-black bg-white text-sm focus:outline-none focus:ring w-full border border-black"
                      id="password"
                      name="password"
                      value={values.password}
                      placeholder="Mot de passe"
                      type="password"
                      style={{ transition: 'all .15s ease' }}
                      error={
                        !!(errors.password && touched.password)
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password
                      ? <div className="text-xs text-red">
                        Veuillez entrer un mot de passe valide: au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial
                      </div>
                      : ''}
                  </div>
                  <div className="relative w-full mt-5">
                    <Field
                      className="px-3 py-3 placeholder-black bg-white text-sm focus:outline-none focus:ring w-full border border-black"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={values.confirmPassword}
                      placeholder="Confirmer le mot de passe"
                      type="password"
                      style={{ transition: 'all .15s ease' }}
                      error={
                        !!(errors.confirmPassword && touched.confirmPassword)
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.confirmPassword && touched.confirmPassword
                      ? <div className="text-xs text-red">{errors.confirmPassword}</div>
                      : ''}
                  </div>
                  <div className="text-center mt-6 mb-10">
                    <button
                      className="bg-white text-black active:bg-gray-700 font-bold px-6 py-3 border-2 border-black hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                      type="submit"
                      disabled={isSubmitting}
                      style={{ transition: 'all .15s ease' }}
                    >
                      S'inscrire
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
                  <div className="flex flex-wrap mt-6 w-full text-right text-gray-500">
                    <div className="w-full text-right">
                      <small className="mr-2">Déjà membre ?</small>
                      <button onClick={redirectLogin}>
                        <small>Connexion</small>
                      </button>
                    </div>
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

export default RegistrationForm
