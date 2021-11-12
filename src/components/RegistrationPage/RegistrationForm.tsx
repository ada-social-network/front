
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form, FormikProps } from 'formik';
import * as Yup from 'yup'

interface FormValues {
  firstName: string
  lastName: string
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
      message: 'Signed up successfully.',
      type: 'success',
  },
  duplicate: {
      message: 'Email-id already exist. Please use different email-id.',
      type: 'error',
  },
  error: {
      message: 'Something went wrong. Please try again.',
      type: 'error',
  },
}

const RegistrationForm: React.FunctionComponent = () => {
	let history = useHistory();
	const redirect = () => {
    history.push('/login')
  }

  const [displayFormStatus, setDisplayFormStatus] = useState(false)
  const [formStatus, setFormStatus] = useState<FormStatus>({
      message: '',
      type: '',
  })

  const createNewUser = async (data: FormValues, resetForm: Function) => {
    try {
        // API call integration will be here. Handle success / error response accordingly.
        if (data) {
            setFormStatus(formStatusProps.success)
            resetForm({})
        }
    } catch (error: any) {
        const response = error.response
        if (
            response.data === 'user already exist' &&
            response.status === 400
        ) {
            setFormStatus(formStatusProps.duplicate)
        } else {
            setFormStatus(formStatusProps.error)
        }
    } finally {
        setDisplayFormStatus(true)
    }
}

	return (
		<Formik
      initialValues={{
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        email: '',
      }}
      onSubmit={(values: FormValues, actions) => {
        createNewUser(values, actions.resetForm)
        setTimeout(() => {
            actions.setSubmitting(false)
        }, 500)
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string()
          .email()
          .required('Enter valid email-id'),
      fullName: Yup.string().required('Please enter full name'),
      password: Yup.string()
          .matches(
              /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/
          )
          .required(
              'Please valid password. One uppercase, one lowercase, one special character and no spaces'
          ),
      confirmPassword: Yup.string()
          .required('Required')
          .test(
              'password-match',
              'Password musth match',
              function (value) {
                  return this.parent.password === value
              }
          ),
      })}
    >
      {(props: FormikProps<FormValues>) => {
        const {
          values,
          touched,
          errors,
          handleBlur,
          handleChange,
          isSubmitting,
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
                        id="firstName" 
                        name="firstName" 
                        placeholder="Prenom"
                        value={values.firstName}
                        style={{ transition: "all .15s ease" }}
                        helperText={
                          errors.firstName && touched.firstName
                              ? errors.firstName
                              : 'Enter your first name.'
                        }
                        error={
                            errors.firstName && touched.firstName
                                ? true
                                : false
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="relative w-full mt-5">
                      <Field
                        className="px-3 py-3 placeholder-black bg-white text-sm focus:outline-none focus:ring w-full border border-black"
                        id="lastName" 
                        name="lastName" 
                        placeholder="Nom"
                        value={values.lastName}
                        style={{ transition: "all .15s ease" }}
                        helperText={
                          errors.lastName && touched.lastName
                              ? errors.lastName
                              : 'Enter your name.'
                        }
                        error={
                            errors.lastName && touched.lastName
                                ? true
                                : false
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="relative w-full mt-5">
                      <Field
                        className="px-3 py-3 placeholder-black bg-white text-sm focus:outline-none focus:ring w-full border border-black"
                        id="email" 
                        name="email" 
                        placeholder="Adresse mail"
                        style={{ transition: "all .15s ease" }}
                      />
                      {errors.email && touched.email && <div>{errors.email}</div>}
                    </div>
                    <div className="relative w-full mt-5">
                      <Field
                        className="px-3 py-3 placeholder-black bg-white text-sm focus:outline-none focus:ring w-full border border-black"
                        id="password" 
                        name="password" 
                        placeholder="Mot de passe"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>
                    <div className="text-center mt-6 mb-10">
                      <button
                        className="bg-white text-black active:bg-gray-700 font-bold px-6 py-3 border-2 border-black hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="submit"
                        style={{ transition: "all .15s ease" }}
                      >
                        S'inscrire
                      </button>
                    </div>
                    <div className="flex flex-wrap mt-6 w-full text-right text-gray-500">
                      <div className="w-full text-right">
                        <small className="mr-2">Déjà membre ?</small>
                        <button onClick={redirect}>
                            <small>Connexion</small>
                        </button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          )
        }
      }
    </Formik>
  );
}

export default RegistrationForm