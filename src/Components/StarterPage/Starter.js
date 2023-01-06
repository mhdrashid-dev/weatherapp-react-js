import React from 'react'

function Starter() {
  return (
    <section className='starter w-full h-screen bg-primary flex flex-col items-center py-10'>
      <div className="content font-montserrat text-center my-auto  mb-20">
        <h1 className='text-black text-2xl font-bold md:text-4xl 2xl:text-5xl'>Ready to check ?</h1>
        <h1 className='text-purple-600 text-xl md:text-3xl 2xl:text-4xl font-bold my-1 md:my-5'>Expirience all that we offer..!</h1>
        <button className='bg-purple-600 text-white text-sm px-5 py-2 md:px-8 md:py-3 md:text-xl rounded mt-16 duration-700 active:scale-x-110'>Get Started</button>
      </div>
      <div className="footer mt-auto ">
        <h6 className='text-black text-xs 2xl:text-sm'>copyrights @ https://api.weatherapi.com</h6>
      </div>
    </section>
  )
}

export default Starter
