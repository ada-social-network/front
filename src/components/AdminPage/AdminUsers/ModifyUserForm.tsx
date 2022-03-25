import { Formik, Field, Form } from 'formik'
import { FunctionComponent, useEffect, useState } from 'react'
import { Promo } from '../../FamilyPage/FamilyPage'
import { User, updateUser, getPromoList } from '../../../services/user.service'

interface FormValues {
  firstName: string,
  lastName: string,
  apprenticeAt?: string,
  isAdmin: boolean,
  promoId: string,
}

interface Props {
  userToUpdate: User,
  onClose: () => void,
  promos : Promo[]
  name : string
}

const ModifyUserForm:FunctionComponent<Props> = ({ onClose, userToUpdate, promos, name }) => {
  const [formSent, setFormSent] = useState(false)

  const handleFormSent = () => {
    setFormSent(true)
  }

  const handleResetForm = () => {
    setFormSent(false)
  }

  return (

    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true">
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div className="inline-block align-bottom bg-white text-left border-4 border-blue rounded-md overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  {!formSent
                    ? (<Formik
                      initialValues={{
                        firstName: userToUpdate.firstName,
                        lastName: userToUpdate.lastName,
                        apprenticeAt: userToUpdate.apprenticeAt ? userToUpdate.apprenticeAt : '',
                        isAdmin: userToUpdate.isAdmin,
                        promoId: userToUpdate.promoId
                      }}
                      onSubmit={(
                        values : FormValues

                      ) => {
                        updateUser(userToUpdate.id, values)
                          .then((response) => {
                            handleFormSent()
                            console.log(response)
                          })

                        setTimeout(onClose, 500)
                        handleResetForm()
                      }}
                    >

                      <Form>
                        <div className="flex flex-col">
                          <label className="my-2" htmlFor="firstName">
                           Prénom
                          </label>
                          <Field
                            placeholder={userToUpdate.firstName}
                            className="px-3 py-2 placeholder-gray-400 bg-white text-gray-400 text-sm focus:outline-none focus:ring w-full border border-black"
                            id="firstName"
                            name="firstName"

                          />
                        </div>
                        <div className="my-2">
                          <label className="my-2" htmlFor="lastName">
                          Nom de famille
                          </label>
                          <Field
                            placeholder={userToUpdate.lastName}
                            as="textarea"
                            className="px-3 py-2 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring w-full border border-black"
                            id="lastName"
                            name="lastName"

                          />
                        </div>
                        <div className="my-2">
                          <label className="my-2" htmlFor="apprenticeAt">
                           Entreprise d'apprentissage
                          </label>
                          <Field
                            placeholder={userToUpdate.apprenticeAt}
                            className="px-3 py-2 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring w-full border border-black"
                            id="apprenticeAt"
                            name="apprenticeAt"

                          />
                        </div>
                        <div className="my-2">
                          <label className="my-2" htmlFor="isAdmin">
                          Admin ?

                            <Field
                              type="checkbox"
                              className="px-3 py-2 placeholder-gray-400 bg-white text-sm focus:outline-none focus:ring w-full border border-black"
                              id="isAdmin"
                              name="isAdmin"
                            />

                          </label>
                        </div>
                        <div className="my-2">
                          <label className="my-2" htmlFor="isAdmin">
                          Promo ?
                            <Field as="select" name="promoId">

                              <option value={userToUpdate.promoId}>{name}</option>

                              {promos.map((promo, i) => <option key={i} value={promo.id}> {promo.name}</option>)}

                            </Field>

                          </label>

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModifyUserForm
