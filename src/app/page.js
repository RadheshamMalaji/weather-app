'use client'

import Spinner from '@/components/Spinner';
import Weather from '@/components/Weather';
import axios from 'axios'
import Image from 'next/image';
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import Sealink from "../../public/sealink.jpeg"
export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const featchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data)
      setLoading(false)
    }).catch(error=>{
      alert("invalid input")
      setLoading(false)
    })
   
  }
  console.log(city)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
  if(loading){
    return <Spinner/>
  }
  else{
  return (
    <div className='h-[100vh]'>
      <div style={{backgroundColor:"#F6EDFF"}} className='absolute top-0 left-0 right-0 bottom z-[1]' />
      <div>
     
        </div>
      <div className='bg-img sm:w-[500px] h-[50%] lg:w-full m-auto text-white z-10'>
        <div className='flex h-[20%] pt-1 justify-center lg:justify-end items-center'>
        <form 
            onSubmit={featchWeather} 
            className='flex justify-between items-center w-full lg:w-[400px] p-1 pr-3 pl-3 bg-white border border-gray-300 rounded-2xl'>
          <div>
          <input
            value={city.toUpperCase()}
            onChange={(e)=>setCity(e.target.value)} 
            className='bg-white border-none w-[100%] text-black focus:outline-none text-2xl placeholder:text-white/55' 
            type={"text"} 
            placeholder="Search City"/>
          </div>
          <button onClick={featchWeather}><BsSearch color="black" size={20}/></button>
        </form>
        </div>
        <div className='block h-[80%]'>
             {weather.main && <Weather data={weather}/>}
        </div>
      </div>
    </div>
  );
      }
}
