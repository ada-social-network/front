import { Formik, Field, Form, FormikHelpers } from 'formik'
import { FunctionComponent, useState } from 'react'
import { postPromo } from '../../../services/admin.service'
import { DatePickerField } from '../../global/DatePicker'

interface Values {
 promo: string;
 biography : string;
 dateOfStart :string;
 dateOfEnd : string;
 profilePic: string;
}

const PostPromoForm = () => {
  const [succes, setSuccess] = useState(false)

  return (
    <div>
      {!succes
        ? (<Formik
          initialValues={{
            promo: '',
            biography: '',
            dateOfStart: '',
            dateOfEnd: '',
            profilePic: ''

          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            postPromo(values)
              .then((response) => {
                setSuccess(true)
                console.log(response)
              })
            setSubmitting(false)
            setSuccess(false)
          }}
        >
          <Form className="border-4 border-blue rounded-md px-2 py-3">
            <div className="flex flex-col">
              <label className="my-2" htmlFor="promo">
                Nom de la nouvelle promo
              </label>
              <Field
                className="px-3 py-2 placeholder-gray-400 bg-white text-gray-400 text-sm focus:outline-none focus:ring w-full border border-black"
                id="promo"
                name="promo"
                placeholder="Le nom de la promo chérie"
              />
            </div>
            <div className="my-2">
              <label className="my-2" htmlFor="biography">
                Biography
              </label>
              <Field
                as="textarea"
                className="px-3 py-2 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring w-full border border-black"
                id="biography"
                name="biography"
                placeholder="Infos pertinentes only"
              />
            </div>
            <div className="my-2">
              <label className="my-2" htmlFor="profilePic">
               Photo de profil
              </label>
              <Field
                className="px-3 py-2 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring w-full border border-black"
                id="profilePic"
                name="profilePic"
                placeholder="Infos pertinentes only"
              />
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col mr-2">
                <label className="my-2" htmlFor="dateOfStart">
                  Date de début
                </label>
                <DatePickerField
                  className="px-3 py-1 placeholder-gray-400 bg-white text-gray-400 text-sm focus:outline-none focus:ring border border-black"
                  placeholder="Start Date"
                  id="dateOfStart"
                  name="dateOfStart"
                />
              </div>
              <div className="flex flex-col mx-2">
                <label className="my-2" htmlFor="dateOfEnd">
                  Date de fin
                </label>
                <DatePickerField
                  className="px-3 py-1 placeholder-gray-400 bg-white text-gray-400 text-sm focus:outline-none focus:ring border border-black"
                  placeholder="end Date"
                  id="dateOfEnd"
                  name="dateOfEnd"

                />
              </div>
            </div>
            <div className="px-4 mt-4 py-3 flex flex-inline align-center">
              <button
                className="bg-white text-black active:bg-gray-700 font-bold px-6 mx-6 py-3 border-2 border-black hover:shadow-lg outline-none focus:outline-none mb-1 w-full"
                type="submit"
              >
                Poster
              </button>
            </div>
          </Form>
        </Formik>)
        : 'Merci pour votre post :)' }
    </div>
  )
}

export default PostPromoForm
