import React from 'react'


function Weather() {
  return (
    <section className='weather w-full h-screen bg-primary flex flex-col justify-around items-center px-5 md:px-28'>
        <div className="content w-full flex flex-col items-center">
            <h1 className='text-3xl md:text-4xl font-bold mb-4 md:mb-12'>Weather</h1>
            <div className="input-sec w-full lg:w-3/4 xl:w-2/4 2xl:w-2/6 flex border-2 border-indigo-200 rounded-md py-[7px] md:py-3 lg:py-[7px]">                
                <input className='w-5/6 pl-4 focus:outline-none md:text-xl lg:text-base' type="text" placeholder='search location' />
                <button className='w-1/6'><i class="fa-solid fa-magnifying-glass md:text-xl lg:text-base"></i></button>
            </div>
        </div>
        <div className="weather-info w-full lg:w-3/4 xl:w-2/4 2xl:w-2/6 h-1/2 border-2 shadow-2xl rounded-lg px-3 py-6 text-center flex flex-col justify-evenly">
            <div className="temp">
                <h1 className='text-3xl font-bold text-black inline-flex relative justify-between py-3 md:text-5xl lg:text-3xl 2xl:text-5xl'><span className='px-2'>36</span><span className='absolute top-0 right-4 text-sm'>o</span><span>C</span></h1>
            </div>
            <div className="icon flex justify-center">
                <img className='md:w-[130px] md:h-[130px] lg:w-[80px] lg:h-[80px] 2xl:w-[100px] 2xl:h-[100px]' src="//cdn.weatherapi.com/weather/64x64/night/143.png" alt="" />
            </div>
            <div className="more-info">
            <h1 className='text-purple-600 font-bold md:my-2 md:text-lg lg:text-sm lg:my-0 xl:my-2 xl:text-lg'>smoke</h1>
            <h1 className='font-bold text-black  md:my-2 md:text-lg lg:text-sm lg:my-0 xl:my-2 xl:text-lg'>Humidity: 10%</h1>
            <h1 className='font-bold text-black  md:my-2 md:text-lg lg:text-sm lg:my-0 xl:my-2 xl:text-lg'>Wind: 10km/h</h1>      
            </div>                 
        </div>                      
    </section>
  )
}

export default Weather
