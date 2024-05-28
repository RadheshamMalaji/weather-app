import Image from 'next/image'
import React from 'react'

const Weather = (props) => {
    const {data}=props
    console.log(data)
    
  return (
    <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10'>
        <div className='relative flex justify-between pt-12'>
            <div className='flex flex-col items-center'>
                <p className='text-2xl'>
                    {data.weather[0].main}
                </p>
                <Image 
                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    alt="/"
                    width="100"
                    height={"100"}
                />
            </div>
            <p>{data.main.temp}&#176;</p>
        </div>
    </div>
  )
}

export default Weather