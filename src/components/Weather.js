import moment from 'moment/moment'
import Image from 'next/image'
import React from 'react'

const Weather = (props) => {
    const { data } = props
    console.log(data)
    const date = new Date()
    console.log(moment(date).format('MMMM Do, HH:mm'))
    return (
        <div className='relative flex flex-col justify-between w-full h-[100%] m-auto p-4 text-gray-300 z-10'>
            <div className='relative flex justify-between pt-10'>
                <div >
                    <div className='flex items-end'>
                        <p className='text-8xl text-white'>{data.main.temp.toFixed(0)}</p>
                       <div>
                        <p className='text-7xl text-white'>&#176;</p>
                        <p className='text-white'>Feels like {data.main.feels_like.toFixed(0)}&#176;</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <Image
                        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                        alt="/"
                        width="100"
                        height={"100"}
                    />
                    <p className='text-2xl text-white'>
                        {data.weather[0].main}
                    </p>
                </div>

            </div>
            <p className='text-white'>{moment(date).format('MMMM Do, HH:mm')}</p>

        </div>
    )
}

export default Weather