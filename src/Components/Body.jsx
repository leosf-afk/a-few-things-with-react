import React from 'react'

function Body({ children }) {
  return (
    <div className="fixed bg-gradient-to-r from-red-500 to-blue-500 bg-no-repeat h-screen w-screen overflow-y-auto lg:overflow-y-hidden">
      <div className="pt-10 pb-4 px-4 ">
        {children}
      </div>
    </div>
  )
}

export default Body