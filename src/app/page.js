'use client'

import Spinner from '@/components/Spinner';
import Weather from '@/components/Weather';
import axios from 'axios'
import Image from 'next/image';
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const featchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data)
    })
    setCity("")
    setLoading(false)
  }
  console.log(city)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
  if(loading){
    return <Spinner/>
  }
  else{
  return (
    <div>
      <div  className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]' />
      <Image
        className='object-cover'
        src='https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' layout='fill'/>
      <div className=' relative  max-w-[500px] w-full m-auto pt-4 text-white z-10'>
        <div className='flex  justify-between items-center'>
        <form onSubmit={featchWeather} className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl'>
          <div>
            <input value={city} onChange={(e)=>setCity(e.target.value)} className='bg-transparent border-none text-white focus:outline-none text-2xl placeholder:text-white/55' type={"text"} placeholder="Search City" />
          </div>
          <button onClick={featchWeather}><BsSearch size={20}/></button>
        </form>
        </div>
        <div className='block'>
             {weather.main && <Weather data={weather}/>}
        </div>
      </div>
      
    </div>
  );
      }
}
