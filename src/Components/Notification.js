import React from 'react'

function Notification() {
  return (
    <div className='w-full h-1/2 lg:w-3/4 xl:w-2/4 2xl:w-2/6 shadow-2xl rounded-lg border-2 flex flex-col justify-center items-center font-montserrat font-bold text-sm'>
      <h1 className='my-2 text-red-600 md:text-xl lg:text-base'>Something went wrong !</h1>
      <h1 className='my-2 text-red-600 md:text-xl lg:text-base'>Enter valid place</h1>
      <i class="fa-regular fa-circle-xmark my-2 text-xl text-red-600"></i>      
    </div>
  )
}

export default Notification
