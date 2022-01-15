import { FunctionComponent, useState } from 'react'
import { Formik, Field, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import { updateUser } from '../../services/user.service'
import { useUserContext } from '../../context/userContext'

interface FormValues {
  firstName: string,
  lastName: string,
  email : string,
  dateOfBirth ?: Date,
  apprenticeAt?: string,
  profilPic?: string,
  privateMail?: string,
  instagram?: string,
  facebook?: string,
  github?: string,
  linkedin?: string,
  mbti?: string,
}

interface Props {
  onClose: () => void
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

const ProfileForm: FunctionComponent<Props> = ({ onClose }) => {
  const { user } = useUserContext()
  const [displayFormStatus, setDisplayFormStatus] = useState(false)
  const [formStatus, setFormStatus] = useState<FormStatus>({
    message: '',
    type: ''
  })

  const initialValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    date_of_birth: user.dateOfBirth,
    apprenticeAt: user.apprenticeAt,
    profilPic: user.profilPic,
    privateMail: user.privateMail,
    instagram: user.instagram,
    facebook: user.facebook,
    github: user.github,
    linkedin: user.linkedin,
    mbti: user.mbti
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required('Veuillez entrez une adresse mail valide'),
    lastName: Yup.string().required('Veuillez entrer votre nom'),
    firstName: Yup.string().required('Veuillez entrer votre prénom')
  })

  const handleSubmit = (values: FormValues) => {
    updateUser(user.id, values)
      .then((response) => {
        setFormStatus(formStatusProps.success)
        setTimeout(onClose, 1500)
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
            <Form>
              <div className="relative mt-8">
                <Field
                  className="px-3 py-3 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring border border-black"
                  placeholder='Prénom'
                  name='firstName'
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{ transition: 'all .15s ease' }}
                  error={
                    !!(errors.firstName && touched.firstName)
                  }
                />
                {errors.firstName && touched.firstName
                  ? <div className="text-xs text-red">{errors.firstName} </div>
                  : ''}
              </div>
              <div className="relative mt-8">
                <Field
                  className="px-3 py-3 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring border border-black"
                  name='lastName'
                  placeholder='Nom'
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{ transition: 'all .15s ease' }}
                  error={
                    !!(errors.lastName && touched.lastName)
                  }
                />
                {errors.lastName && touched.lastName
                  ? <div className="text-xs text-red">{errors.lastName}</div>
                  : ''}

              </div>
              <div className="relative mt-8">
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
                    !!(errors.email && touched.email)
                  }
                />
                {errors.email && touched.email
                  ? <div className="text-xs text-red">{errors.email}</div>
                  : ''}
              </div>
              <div className="relative mt-8">
                <Field
                  className="px-3 py-3 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring border border-black"
                  name='dateOfBirth'
                  placeholder='Date de naissance'
                  value={values.dateOfBirth}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="relative mt-8">
                <Field
                  className="px-3 py-3 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring border border-black"
                  name='apprenticeAt'
                  placeholder='Entreprise'
                  value={values.apprenticeAt}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="relative mt-8">
                <Field
                  className="px-3 py-3 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring border border-black"
                  name='instagram'
                  placeholder='Instagram'
                  value={values.instagram}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="relative mt-8">
                <Field
                  className="px-3 py-3 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring border border-black"
                  name='profilPic'
                  placeholder='Photo de profil'
                  value={values.profilPic}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="relative mt-8">
                <Field
                  className="px-3 py-3 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring border border-black"
                  name='facebook'
                  placeholder='Facebook'
                  value={values.facebook}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="relative mt-8">
                <Field
                  className="px-3 py-3 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring border border-black"
                  name='github'
                  placeholder='Github'
                  value={values.github}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="relative mt-8">
                <Field
                  className="px-3 py-3 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring border border-black"
                  name='linkedin'
                  placeholder='Linkedin'
                  value={values.linkedin}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="relative mt-8">
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
                  type="button"
                  className="bg-red text-white active:bg-gray-700 font-bold px-6 mx-6 py-3 border-2 border-black hover:shadow-lg outline-none focus:outline-none mb-1 w-full"
                  onClick={onClose}
                >
                Annuler
                </button>
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
            </Form>
          </div>
        )
      }}
    </Formik>
  )
}

export default ProfileForm
