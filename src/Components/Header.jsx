import React, { useState } from 'react'


function Header() {


  const [menuHidden, setMenuHidden] = useState(true);

  const toggleMenu = () => {
    setMenuHidden(!menuHidden);

  }


  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-fuchsia-500 to-pink-500 p-6 w-full mb-10">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src="src/img/trigger.jpg" alt="Image" class="h-14 w-14 object-cover mx-auto my-auto" ></img>
          <span className="font-semibold text-xl tracking-tight">React and tailwindcss practice</span>
        </div>
        <div className="block lg:hidden">
          <button id='boton' className="flex items-center px-3 py-2 border rounded text-pink-200 border-pink-400 hover:text-white hover:border-white" onClick={toggleMenu}>
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div id='menu' className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center ${menuHidden ? 'hidden' : ''}`} >
          <div className="text-sm lg:flex-grow">
            <a href="#responsive-header" className="block mt-4  lg:inline-block lg:mt-0 text-pink-200 hover:text-white mr-4">
            Example-1
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-pink-200 hover:text-white mr-4">
            Example-2
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-pink-200 hover:text-white  mr-4">
            Example-3
            </a>
          </div>
          <div>
            <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-pink-500 hover:bg-white mt-4 lg:mt-0">Example-button</a>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Header