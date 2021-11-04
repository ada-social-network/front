import React from "react";
import SearchBar from "./SearchBar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

type User = {
  firstName: String,
  lastName: String,
}

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [hasUser, setHasUser] = React.useState(false); // temporaire

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink border-b-8 border-red">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-red"
              href="/"
            >
              AdaHub
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} />

            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            
            <SearchBar />
          
            <div className="flex flex-col lg:flex-row list-none lg:ml-auto">
             
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/login"
                >
                  <span className="ml-2">Login</span>
                </a>
            
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}