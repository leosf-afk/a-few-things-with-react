import React from 'react'
import SocialIcons from './SocialIcons'
import { Icons } from '../constants/icons' 

function Footer() {
  return (

    <footer className="fixed  bottom-0 left-0 right-0 bg-gray-900 text-white">
      {/* py: padding altura */}

      <div className="md:flex ms:justify-between md:items-center sm:px-12  px-4  bg-[#ffffff19] sm:py-5   lg:py-7 ">
        <h1 className="lg:text-4x1 text-3x1 md:mb-0 mb-6 lg:leading-normal font-semibold
        md:w-2/5 "><span className="text-teal-400">React </span> <span>& </span>talwind practice</h1>
      </div>


      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2023 . All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />

      </div>

    </footer>

  )
}

export default Footer