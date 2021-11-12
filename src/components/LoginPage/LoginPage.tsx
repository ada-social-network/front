import React from "react"
import Login from "./Login"
import Navbar from "./NavBar"

const LoginPage = () => (
  <>
    <Navbar />
      <main>
        <section className="absolute w-screen h-screen bg-pink">
          <div className="container mx-auto px-4 h-full">
            <div className="flex pt-14 content-center items-center justify-center">
              <Login />
            </div>
          </div>
        </section>
      </main>
  </>
)

export default LoginPage