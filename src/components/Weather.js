import Image from 'next/image'
import React from 'react'

const Weather = (props) => {
    const {data}=props
console.log(data)
    const conversion=(temp)=>{
      const celcius= (temp - 32) * 5/9;
      console.log(celcius)
      return temp
    }
  return (
    <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10'>
        <div className='relative flex justify-between pt-12'>
        <p className='text-8xl'>{conversion(data.main.temp).toFixed(0)}&#176;</p>
            <div className='flex flex-col items-center'>
                <Image 
                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    alt="/"
                    width="100"
                    height={"100"}
                />
                <p className='text-2xl'>
                    {data.weather[0].main}
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default Weather