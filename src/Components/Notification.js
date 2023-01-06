import React from 'react'

function Notification() {
  return (
    <div className='w-full h-1/2 shadow-2xl rounded-lg border-2 flex flex-col justify-center items-center font-montserrat font-bold text-sm'>
      <h1 className='my-2 text-red-600'>Something went wrong !</h1>
      <h1 className='my-2 text-red-600'>Enter valid place</h1>
      <i class="fa-regular fa-circle-xmark my-2 text-xl text-red-600"></i>      
    </div>
  )
}

export default Notification
