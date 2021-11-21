
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const LoginForm = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  const redirect = () => {
    history.push('/registration')
  }

  return (
    <>
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
            <form>
              <div className="relative w-full mt-8 mb-5">
                <input
                  type="text"
                  className="px-3 py-3 placeholder-black bg-white text-sm focus:outline-none focus:ring w-full border border-black"
                  placeholder="Nom d’utilisateur ou e-mail"
                  onChange={e => setUserName(e.target.value)}
                  style={{ transition: 'all .15s ease' }}
                />
              </div>
              <div className="relative w-full mb-4">
                <input
                  type="text"
                  className="px-3 py-3 placeholder-black bg-white text-sm focus:outline-none focus:ring w-full border border-black"
                  placeholder="Mot de passe"
                  onChange={e => setPassword(e.target.value)}
                  style={{ transition: 'all .15s ease' }}
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
                  style={{ transition: 'all .15s ease' }}
                >
 									Connexion
                </button>
              </div>
              <div className="flex flex-wrap mt-6">
                <button className="w-1/2 text-gray-500" onClick={e => e.preventDefault()}>
                  <small>Mot de passe oublié ?</small>
                </button>
                <button className="w-1/2 text-right text-gray-500" onClick={redirect}>
                  <small>Inscription</small>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginForm
