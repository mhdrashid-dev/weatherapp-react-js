import React,{useState} from 'react'
import LoadingPage from "../../Pages/LoadingPage"
import Notification from '../Notification';
import axios from 'axios'


function Weather() {

    let [location,setLocation]=useState('kochi');
    let [weatherData,setWeatherData]=useState({place:null,temp:null,icon:null,status:null,humidity:null,wind:null});
    let [loading,setLoading]=useState(null);
    let [notification,setNotification]=useState(null)



    let GetWeatherData=()=>{
        setNotification(false);
        setLoading(true)
        axios.get(`https://api.weatherapi.com/v1/current.json?key=e68847e0efe5478d824183721222512&q=${location}&aqi=no`).then((response)=>{            
            setWeatherData({
                place:response.data.location.name,
                temp:response.data.current.feelslike_c,
                icon:response.data.current.condition.icon,
                status:response.data.current.condition.text,
                humidity:response.data.current.humidity,
                wind:response.data.current.wind_kph
            })      
            setLoading(false);
        }).catch(function(error){            
            if(error.message==='Request failed with status code 400'){
                setNotification(true);
            }
        })                 
        
    }   
   

  return (
    <section className='weather w-full h-screen bg-primary flex flex-col justify-around items-center px-5 md:px-28'>
        <div className="content w-full flex flex-col items-center">
            <h1 className='text-3xl md:text-4xl font-bold mb-4 md:mb-12'>Weather</h1>
            <div className="input-sec w-full lg:w-3/4 xl:w-2/4 2xl:w-2/6 flex border-2 border-indigo-200 rounded-md py-[7px] md:py-3 lg:py-[7px]">                
                <input className='w-5/6 pl-4 focus:outline-none md:text-xl lg:text-base' type="text" placeholder='search location'  onInput={(e)=>{setLocation(e.target.value)}}/>
                <button className='w-1/6'><i class="fa-solid fa-magnifying-glass md:text-xl lg:text-base" onClick={GetWeatherData}></i></button>
            </div>
        </div>
        <>
        {weatherData.place!==null && loading===false && notification===false
        &&
        <div className="weather-info w-full lg:w-3/4 xl:w-2/4 2xl:w-2/6 h-1/2 border-2 shadow-2xl rounded-lg px-3 py-6 text-center flex flex-col justify-evenly">
            <div className="temp">
                <h1 className='font-bold mb-2'>{weatherData.place}</h1>
                <h1 className='text-3xl font-bold text-black inline-flex relative justify-between py-3 md:text-5xl lg:text-3xl 2xl:text-5xl'><span className='px-2'>{weatherData.temp}</span><span className='absolute top-0 right-4 text-sm'>o</span><span>C</span></h1>
            </div>
            <div className="icon flex justify-center">
                <img className='md:w-[130px] md:h-[130px] lg:w-[80px] lg:h-[80px] 2xl:w-[100px] 2xl:h-[100px]' src="//cdn.weatherapi.com/weather/64x64/night/143.png" alt="" />
            </div>
            <div className="more-info">
            <h1 className='text-purple-600 font-bold md:my-2 md:text-lg lg:text-sm lg:my-0 xl:my-2 xl:text-lg'>{weatherData.status}</h1>
            <h1 className='font-bold text-black  md:my-2 md:text-lg lg:text-sm lg:my-0 xl:my-2 xl:text-lg'>Humidity: {weatherData.humidity}%</h1>
            <h1 className='font-bold text-black  md:my-2 md:text-lg lg:text-sm lg:my-0 xl:my-2 xl:text-lg'>Wind: {weatherData.wind}km/h</h1>      
            </div>                 
        </div>      
        }
        </>                
        {loading===true && weatherData.place && notification===false
        &&
        <LoadingPage></LoadingPage>
        }
        {notification===true&& loading===true &&
        <Notification></Notification>}
    </section>
  )
}

export default Weather
