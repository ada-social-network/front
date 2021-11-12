import React from "react"
import Navbar from "../global/Header"
import RegistrationForm from "./RegistrationForm"

const RegistrationPage = () => (
  <>
    <Navbar />
      <main>
        <section className="absolute w-screen h-screen bg-pink">
          <div className="container mx-auto px-4 h-full">
            <div className="flex pt-14 content-center items-center justify-center">
              <RegistrationForm />
            </div>
          </div>
        </section>
      </main>
  </>
)

export default RegistrationPage