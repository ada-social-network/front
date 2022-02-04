import { Formik, Field, Form, FormikHelpers } from 'formik'
import { FunctionComponent, useState } from 'react'
import { postPromo } from '../../services/admin.service'
import { DatePickerField } from '../global/DatePicker'

interface Values {
 promo: string;
 biography : string;
 dateOfStart :string;
 dateOfEnd : string;
}

interface Props {
  onClose: () => void
}

const PostPromoForm:FunctionComponent<Props> = ({ onClose }) => {
  const [succes, setSuccess] = useState(false)

  return (
    <div>
      {!succes
        ? (<Formik
          initialValues={{
            promo: '',
            biography: '',
            dateOfStart: '',
            dateOfEnd: ''

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
            setTimeout(onClose, 500)
            setSuccess(false)
          }}
        >
          <Form>
            <div className="flex flex-col">
              <label className="my-2" htmlFor="title">
                Nom de la nouvelle promo
              </label>
              <Field
                className="px-3 py-3 placeholder-gray-400 bg-white text-gray-400 text-sm focus:outline-none focus:ring w-full border border-black"
                id="promo"
                name="promo"
                placeholder="Le nom"
              />
            </div>
            <label className="my-2" htmlFor="content">
               Biography
            </label>
            <Field
              as="textarea"
              className="px-3 py-3 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring w-full border border-black"
              id="biography"
              name="biography"
              placeholder="Mon message à la plèbe"
            />
            <div className="flex flex-row">
              <label className="my-2" htmlFor="dateOfStart">
               Start Date
              </label>
              <DatePickerField
                className="px-3 py-3 placeholder-gray-400 bg-white text-gray-400 text-sm focus:outline-none focus:ring border border-black"
                placeholder="Start Date"
                id="dateOfStart"
                name="dateOfStart"
              />
              <label className="my-2" htmlFor="dateOfEnd">
               end Date
              </label>
              <DatePickerField
                className="px-3 py-3 placeholder-gray-400 bg-white text-gray-400 text-sm focus:outline-none focus:ring border border-black"
                placeholder="end Date"
                id="dateOfEnd"
                name="dateOfEnd"

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
