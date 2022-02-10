import { Formik, Field, Form, FormikHelpers, FormikHandlers } from 'formik'
import { FunctionComponent, useState } from 'react'
import { updatePromo } from '../../../services/admin.service'
import { Promo } from '../../FamilyPage/FamilyPage'
import { DatePickerField } from '../../global/DatePicker'

interface FormValues {
 promo: string;
 biography : string;
 dateOfStart :string ;
 dateOfEnd : string;
 profilePic: string;
}

interface Props {
  promoToUpdate: Promo,
  onClose: () => void,
}

const ModifyPromoForm:FunctionComponent<Props> = ({ onClose, promoToUpdate }) => {
  const [formSent, setFormSent] = useState(false)

  const handleFormSent = () => {
    setFormSent(true)
  }

  const handleResetForm = () => {
    setFormSent(false)
  }

  return (
    <div>
      {!formSent
        ? (<Formik
          initialValues={{
            promo: promoToUpdate.promo,
            biography: promoToUpdate.biography,
            dateOfStart: promoToUpdate.dateOfStart ? promoToUpdate.dateOfStart : '',
            dateOfEnd: promoToUpdate.dateOfEnd ? promoToUpdate.dateOfEnd : '',
            profilePic: promoToUpdate.profilePic ? promoToUpdate.profilePic : 'RAS'
          }}
          onSubmit={(
            values : FormValues,
            { setSubmitting }: FormikHelpers<FormValues>
          ) => {
            updatePromo(promoToUpdate.id, values)
              .then((response) => {
                handleFormSent()
                console.log(response)
              })
            setSubmitting(false)
            setTimeout(onClose, 500)
            handleResetForm()
          }}
        >

          <Form>
            <div className="flex flex-col">
              <label className="my-2" htmlFor="promo">
                Nom de la nouvelle promo
              </label>
              <Field
                placeholder={promoToUpdate.promo}
                className="px-3 py-2 placeholder-gray-400 bg-white text-gray-400 text-sm focus:outline-none focus:ring w-full border border-black"
                id="promo"
                name="promo"

              />
            </div>
            <div className="my-2">
              <label className="my-2" htmlFor="biography">
               Biography
              </label>
              <Field
                placeholder={promoToUpdate.biography}
                as="textarea"
                className="px-3 py-2 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring w-full border border-black"
                id="biography"
                name="biography"

              />
            </div>
            <div className="my-2">
              <label className="my-2" htmlFor="profilePic">
               Photo de profil
              </label>
              <Field
                placeholder={promoToUpdate.profilePic}
                className="px-3 py-2 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring w-full border border-black"
                id="profilePic"
                name="profilePic"

              />
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col mr-2">
                <label className="my-2" htmlFor="dateOfStart">
               Date de début
                </label>
                <DatePickerField
                  placeholder={promoToUpdate.dateOfStart}
                  className="px-3 py-1 placeholder-gray-400 bg-white text-gray-400 text-sm focus:outline-none focus:ring border border-black"

                  id="dateOfStart"
                  name="dateOfStart"
                />
              </div>
              <div className="flex flex-col mx-2">
                <label className="my-2" htmlFor="dateOfEnd">
               Date de fin
                </label>
                <DatePickerField
                  placeholder={promoToUpdate.dateOfEnd}
                  className="px-3 py-1 placeholder-gray-400 bg-white text-gray-400 text-sm focus:outline-none focus:ring border border-black"

                  id="dateOfEnd"
                  name="dateOfEnd"

                />
              </div>
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
                Modifier
              </button>
            </div>
          </Form>
        </Formik>)
        : 'Merci pour votre Modification :)' }
    </div>
  )
}

export default ModifyPromoForm
