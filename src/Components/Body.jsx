import React from 'react'

function Body({ children }) {
  return (
    <div className="flex flex-col bg-gradient-to-r from-red-500 to-blue-500 bg-no-repeat h-screen ">
      <div className="flex justify-center pt-10">
        {children}
      </div>
    </div>
  )
}

export default Body

// pt-10 pb-4 px-4



{/* <div className="flex flex-col bg-gradient-to-r from-red-500 to-blue-500 bg-no-repeat h-screen w-screen overflow-y-auto lg:overflow-y-hidden">
<div className="flex justify-center pt-10">
  {children}
</div>
</div> */}