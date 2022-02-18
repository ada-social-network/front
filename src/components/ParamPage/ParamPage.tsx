import { FunctionComponent, useState } from 'react'
import { Formik, Field, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import { updateUser } from '../../services/user.service'
import { useUserContext } from '../../context/userContext'

interface FormValues {
  firstName: string,
  lastName: string,
  email: string,
  dateOfBirth?: string,
  apprenticeAt?: string,
  profilPic?: string,
  privateMail?: string,
  instagram?: string,
  facebook?: string,
  github?: string,
  linkedin?: string,
  mbti?: string,
  biography?: string,
  coverPic? : string,
  projectPerso? : string,
  projectPro?: string
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
    message: 'Modifications prises en compte',
    type: 'success'
  },
  error: {
    message: 'Une erreur est survenue',
    type: 'error'
  }
}

const ParamPage: FunctionComponent = () => {
  const { user } = useUserContext()
  const [displayFormStatus, setDisplayFormStatus] = useState(false)
  const [formStatus, setFormStatus] = useState<FormStatus>({
    message: '',
    type: ''
  })

  if (user.firstName === '') {
    return <div></div>
  }

  const initialValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    dateOfBirth: user.dateOfBirth,
    apprenticeAt: user.apprenticeAt,
    profilPic: user.profilPic,
    privateMail: user.privateMail,
    instagram: user.instagram,
    facebook: user.facebook,
    github: user.github,
    linkedin: user.linkedin,
    mbti: user.mbti,
    biography: user.biography,
    coverPic: user.coverPic,
    projectPerso: user.projectPerso,
    projectPro: user.projectPro
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Veuillez entrez une adresse mail valide'),
    lastName: Yup.string().required('Veuillez entrer votre nom'),
    firstName: Yup.string().required('Veuillez entrer votre prénom'),
    dateOfBirth: Yup.string()
      .matches(
        /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/
      )
  })

  const handleSubmit = (values: FormValues) => {
    updateUser(user.id, values)
      .then(() => {
        setFormStatus(formStatusProps.success)
      })
      .catch(function (error) {
        console.log(error)
        setFormStatus(formStatusProps.error)
      })
      .finally(() => setDisplayFormStatus(true))
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
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
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <h1 className='mt-8'>Paramètres du compte</h1>
            <Form>
              <div className='relative mt-8 grid grid-cols-2'>
                <p>Prénom</p>
                <div>
                  <Field
                    className="px-3 py-3 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring border border-black"
                    placeholder='Prénom'
                    name='firstName'
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ transition: 'all .15s ease' }}
                    error={
                      errors.firstName && touched.firstName
                        ? 'erreur'
                        : undefined
                    }
                  />
                  {errors.firstName && touched.firstName
                    ? <div className="text-xs text-red">{errors.firstName} </div>
                    : ''}
                </div>
              </div>

              <div className='relative mt-8 grid grid-cols-2'>
                <p>Nom</p>
                <div>
                  <Field
                    className="px-3 py-3 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring border border-black"
                    name='lastName'
                    placeholder='Nom'
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ transition: 'all .15s ease' }}
                    error={
                      errors.lastName && touched.lastName
                        ? 'erreur'
                        : undefined
                    }
                  />
                  {errors.lastName && touched.lastName
                    ? <div className="text-xs text-red">{errors.lastName}</div>
                    : ''}
                </div>
              </div>
              <div className='relative mt-8 grid grid-cols-2'>
                <p>Email</p>
                <div>
                  <Field
                    className="px-3 py-3 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring border border-black"
                    name='email'
                    placeholder='Addresse mail'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="email"
                    style={{ transition: 'all .15s ease' }}
                    error={
                      errors.email && touched.email
                        ? 'erreur'
                        : undefined
                    }
                  />
                  {errors.email && touched.email
                    ? <div className="text-xs text-red">{errors.email}</div>
                    : ''}
                </div>
              </div>
              <div className='relative mt-8 grid grid-cols-2'>
                <p>Date de naissance</p>
                <div>
                  <Field
                    className="px-3 py-3 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring border border-black"
                    name='dateOfBirth'
                    placeholder='Date de naissance'
                    value={values.dateOfBirth}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      errors.dateOfBirth && touched.dateOfBirth
                        ? 'erreur'
                        : undefined
                    }
                  />
                  {errors.dateOfBirth && touched.dateOfBirth
                    ? <div className="text-xs text-red">Veuillez entrer une date valide</div>
                    : ''}
                </div>
              </div>
              <div className='relative mt-8 grid grid-cols-2'>
                <p>Instagram</p>
                <Field
                  className="px-3 py-3 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring border border-black"
                  name='instagram'
                  placeholder='Instagram'
                  value={values.instagram}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className='relative mt-8 grid grid-cols-2'>
                <p>Facebook</p>
                <Field
                  className="px-3 py-3 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring border border-black"
                  name='facebook'
                  placeholder='Facebook'
                  value={values.facebook}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className='relative mt-8 grid grid-cols-2'>
                <p>Github</p>
                <Field
                  className="px-3 py-3 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring border border-black"
                  name='github'
                  placeholder='Lien Github'
                  value={values.github}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className='relative mt-8 grid grid-cols-2'>
                <p>Linkedin</p>
                <Field
                  className="px-3 py-3 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring border border-black"
                  name='linkedin'
                  placeholder='Lien Linkedin'
                  value={values.linkedin}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className='relative mt-8 grid grid-cols-2'>
                <p>MBTI</p>
                <Field
                  className="px-3 py-3 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring border border-black"
                  name='mbti'
                  placeholder='Profil MBTI'
                  value={values.mbti}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="px-4 mt-4 py-3 flex flex-inline align-center">
                <button
                  className="bg-white text-black active:bg-gray-700 font-bold px-6 mx-6 py-3 border-2 border-black hover:shadow-lg outline-none focus:outline-none mb-1 w-full"
                  type="submit"
                  disabled={isSubmitting}
                >
                Enregistrer
                </button>
              </div>
              {displayFormStatus && (
                <div className="formStatus">
                  {formStatus.type === 'error'
                    ? (
                      <p>{formStatus.message}</p>
                    )
                    : formStatus.type === 'success'
                      ? (
                        <p>{formStatus.message}</p>
                      )
                      : null }
                </div>
              )}
            </Form>
          </div>
        )
      }}
    </Formik>
  )
}

export default ParamPage
