import React from 'react'

function Weather() {
  return (
    <section className='weather w-full h-screen bg-primary flex flex-col justify-around items-center px-5'>
        <div className="content w-full flex flex-col items-center">
            <h1 className='text-3xl font-bold my-4'>Weather</h1>
            <div className="input-sec w-full flex border-2 border-indigo-200 rounded-md py-[7px]">                
                <input className='w-5/6 pl-4 focus:outline-none' type="text" placeholder='search location' />
                <button className='w-1/6'><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
        <div className="weather-info w-full h-1/2 border-2 shadow-2xl rounded-lg px-3 py-6 text-center flex flex-col justify-evenly">
            <div className="temp">
                <h1 className='text-3xl font-bold text-black inline-flex relative justify-between py-3'><span className='px-2'>36</span><span className='absolute top-0 right-4 text-sm'>o</span><span>C</span></h1>
            </div>
            <div className="icon flex justify-center">
                <img src="//cdn.weatherapi.com/weather/64x64/night/143.png" alt="" />
            </div>
            <div className="more-info">
            <h1 className='text-purple-600 font-bold'>smoke</h1>
            <h1 className='font-bold text-black '>Humidity: 10%</h1>
            <h1 className='font-bold text-black '>Wind: 10km/h</h1>      
            </div>                 
        </div>
    </section>
  )
}

export default Weather
