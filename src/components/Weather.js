import axios from 'axios'
import moment from 'moment/moment'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Weather = (props) => {
    const { data } = props
    console.log(data)
    const [uvindex, setUvindex] = useState(0)
    const date = new Date()
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/uvi?appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&lat=${data.coord.lat}&lon=${data.coord.lon}`).then((response) => {
            setUvindex(response.data)
            console.log(response.data)
        }).catch(error => {
            alert("invalid input")
        })
    }, [data])

    return (
        <>
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
                <div className='pb-3'>
                    <p className='text-white'>{moment(date).format('MMMM Do, HH:mm')}</p>
                </div>
            </div>
            <div className='pt-4 pl-4 pr-4 flex justify-between'>
                <button className='button text-black border'>
                    Today
                </button>
                <button className='button text-black  border'>
                    Tomorrow
                </button>
                <button className='button text-black border'>
                    10 days
                </button>
            </div>
            <div className='flex gap-2 pt-2 pl-4 pr-4'>
                <div className='pl-[11px] flex items-center bg-[#D0BCFF]/30 w-[50%] h-[65px] rounded-[16px] gap-2'>
                    <div className='flex justify-center items-center rounded-[50%] bg-[white] w-[28px] h-[28px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                            <path d="M6.66668 11.3333C6.11112 11.3333 5.6389 11.1389 5.25001 10.75C4.86112 10.3611 4.66668 9.88889 4.66668 9.33333H6.00001C6.00001 9.52222 6.06401 9.68044 6.19201 9.808C6.31957 9.936 6.47779 10 6.66668 10C6.85557 10 7.01401 9.936 7.14201 9.808C7.26957 9.68044 7.33334 9.52222 7.33334 9.33333C7.33334 9.14444 7.26957 8.98622 7.14201 8.85867C7.01401 8.73067 6.85557 8.66667 6.66668 8.66667H0.333344V7.33333H6.66668C7.22223 7.33333 7.69445 7.52778 8.08334 7.91667C8.47223 8.30556 8.66668 8.77778 8.66668 9.33333C8.66668 9.88889 8.47223 10.3611 8.08334 10.75C7.69445 11.1389 7.22223 11.3333 6.66668 11.3333ZM0.333344 4.66667V3.33333H9.33334C9.62223 3.33333 9.86112 3.23889 10.05 3.05C10.2389 2.86111 10.3333 2.62222 10.3333 2.33333C10.3333 2.04444 10.2389 1.80556 10.05 1.61667C9.86112 1.42778 9.62223 1.33333 9.33334 1.33333C9.04445 1.33333 8.80556 1.42778 8.61668 1.61667C8.42779 1.80556 8.33334 2.04444 8.33334 2.33333H7.00001C7.00001 1.67778 7.2249 1.12489 7.67468 0.674667C8.1249 0.224889 8.67779 0 9.33334 0C9.9889 0 10.5418 0.224889 10.992 0.674667C11.4418 1.12489 11.6667 1.67778 11.6667 2.33333C11.6667 2.98889 11.4418 3.54156 10.992 3.99133C10.5418 4.44156 9.9889 4.66667 9.33334 4.66667H0.333344ZM11.3333 10V8.66667C11.6222 8.66667 11.8611 8.57222 12.05 8.38333C12.2389 8.19444 12.3333 7.95555 12.3333 7.66667C12.3333 7.37778 12.2389 7.13889 12.05 6.95C11.8611 6.76111 11.6222 6.66667 11.3333 6.66667H0.333344V5.33333H11.3333C11.9889 5.33333 12.5418 5.55822 12.992 6.008C13.4418 6.45822 13.6667 7.01111 13.6667 7.66667C13.6667 8.32222 13.4418 8.87511 12.992 9.32533C12.5418 9.77511 11.9889 10 11.3333 10Z" fill="#1C1B1F" />
                        </svg>
                    </div>
                    <div className='text-black'>
                        <div>
                            Wind speed
                        </div>
                        <div>
                            {data.wind.speed}km/h
                        </div>
                    </div>
                </div>
                <div className='pl-[11px] flex items-center bg-[#D0BCFF]/30 w-[50%] h-[65px] rounded-[16px] gap-2'>
                    <div className='flex justify-center items-center rounded-[50%] bg-[white] w-[28px] h-[28px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M8.3 13.6C8.13334 13.6889 7.964 13.7026 7.792 13.6413C7.61956 13.5804 7.48889 13.4666 7.4 13.3L6.4 11.3C6.31111 11.1333 6.29734 10.964 6.35867 10.792C6.41956 10.6195 6.53334 10.4889 6.7 10.4C6.86667 10.3111 7.036 10.2973 7.208 10.3586C7.38045 10.4195 7.51111 10.5333 7.6 10.7L8.6 12.7C8.68889 12.8666 8.70289 13.036 8.642 13.208C8.58067 13.3804 8.46667 13.5111 8.3 13.6ZM12.3 13.6C12.1333 13.6889 11.964 13.7026 11.792 13.6413C11.6196 13.5804 11.4889 13.4666 11.4 13.3L10.4 11.3C10.3111 11.1333 10.2973 10.964 10.3587 10.792C10.4196 10.6195 10.5333 10.4889 10.7 10.4C10.8667 10.3111 11.036 10.2973 11.208 10.3586C11.3804 10.4195 11.5111 10.5333 11.6 10.7L12.6 12.7C12.6889 12.8666 12.7029 13.036 12.642 13.208C12.5807 13.3804 12.4667 13.5111 12.3 13.6ZM4.3 13.6C4.13334 13.6889 3.964 13.7026 3.792 13.6413C3.61956 13.5804 3.48889 13.4666 3.4 13.3L2.4 11.3C2.31111 11.1333 2.29734 10.964 2.35867 10.792C2.41956 10.6195 2.53334 10.4889 2.7 10.4C2.86667 10.3111 3.036 10.2973 3.208 10.3586C3.38045 10.4195 3.51111 10.5333 3.6 10.7L4.6 12.7C4.68889 12.8666 4.70289 13.036 4.642 13.208C4.58067 13.3804 4.46667 13.5111 4.3 13.6ZM4 9.66665C2.98889 9.66665 2.12511 9.3082 1.40867 8.59131C0.69178 7.87487 0.333336 7.01109 0.333336 5.99998C0.333336 5.07776 0.638891 4.2722 1.25 3.58331C1.86111 2.89442 2.61667 2.48887 3.51667 2.36665C3.87222 1.73331 4.35845 1.23598 4.97534 0.874646C5.59178 0.513757 6.26667 0.333313 7 0.333313C8 0.333313 8.86934 0.652869 9.608 1.29198C10.3471 1.93065 10.7944 2.72776 10.95 3.68331C11.7167 3.74998 12.3611 4.06665 12.8833 4.63331C13.4056 5.19998 13.6667 5.87776 13.6667 6.66665C13.6667 7.49998 13.3751 8.20842 12.792 8.79198C12.2084 9.37509 11.5 9.66665 10.6667 9.66665H4ZM4 8.33331H10.6667C11.1333 8.33331 11.5278 8.1722 11.85 7.84998C12.1722 7.52776 12.3333 7.13331 12.3333 6.66665C12.3333 6.19998 12.1722 5.80554 11.85 5.48331C11.5278 5.16109 11.1333 4.99998 10.6667 4.99998H9.66667V4.33331C9.66667 3.59998 9.40556 2.9722 8.88334 2.44998C8.36111 1.92776 7.73334 1.66665 7 1.66665C6.46667 1.66665 5.98045 1.81109 5.54134 2.09998C5.10267 2.38887 4.77222 2.77776 4.55 3.26665L4.38334 3.66665H3.96667C3.33334 3.68887 2.79178 3.92487 2.342 4.37465C1.89178 4.82487 1.66667 5.36665 1.66667 5.99998C1.66667 6.64442 1.89445 7.19442 2.35 7.64998C2.80556 8.10554 3.35556 8.33331 4 8.33331Z" fill="#1C1B1F" />
                        </svg>
                    </div>
                    <div className='text-black'>
                        <div>
                            Rain Chance
                        </div>
                        <div>
                            {data.clouds.all}%
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex gap-2 pt-2 pl-4 pr-4'>
                <div className='pl-[11px] flex items-center bg-[#D0BCFF]/30 w-[50%] h-[65px] rounded-[16px] gap-2'>
                    <div className='flex justify-center items-center rounded-[50%] bg-[white] w-[28px] h-[28px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M1.33334 13.5667V12.2667C1.65557 12.2667 1.93045 12.2167 2.15801 12.1167C2.38601 12.0167 2.61668 11.9085 2.85001 11.792C3.08334 11.6751 3.34179 11.5694 3.62534 11.4747C3.90845 11.3805 4.25557 11.3334 4.66668 11.3334C5.0889 11.3334 5.43601 11.3805 5.70801 11.4747C5.98045 11.5694 6.23334 11.6751 6.46668 11.792C6.70001 11.9085 6.93334 12.0167 7.16668 12.1167C7.40001 12.2167 7.67779 12.2667 8.00001 12.2667C8.32223 12.2667 8.60001 12.2167 8.83334 12.1167C9.06668 12.0167 9.30001 11.9085 9.53334 11.792C9.76668 11.6751 10.0222 11.5694 10.3 11.4747C10.5778 11.3805 10.9222 11.3334 11.3333 11.3334C11.7556 11.3334 12.1056 11.3805 12.3833 11.4747C12.6611 11.5694 12.9167 11.6751 13.15 11.792C13.3833 11.9085 13.6167 12.0167 13.85 12.1167C14.0833 12.2167 14.3556 12.2667 14.6667 12.2667V13.5667C14.2445 13.5667 13.8918 13.5167 13.6087 13.4167C13.3251 13.3167 13.0667 13.2082 12.8333 13.0913C12.6 12.9749 12.3722 12.8696 12.15 12.7754C11.9278 12.6807 11.6556 12.6334 11.3333 12.6334C11.0222 12.6334 10.7529 12.6807 10.5253 12.7754C10.2973 12.8696 10.0693 12.9749 9.84134 13.0913C9.61379 13.2082 9.35845 13.3167 9.07534 13.4167C8.79179 13.5167 8.43334 13.5667 8.00001 13.5667C7.56668 13.5667 7.20823 13.5167 6.92468 13.4167C6.64157 13.3167 6.38623 13.2082 6.15868 13.0913C5.93068 12.9749 5.70557 12.8696 5.48334 12.7754C5.26112 12.6807 4.9889 12.6334 4.66668 12.6334C4.35557 12.6334 4.08623 12.6807 3.85868 12.7754C3.63068 12.8696 3.40001 12.9749 3.16668 13.0913C2.93334 13.2082 2.67512 13.3167 2.39201 13.4167C2.10845 13.5167 1.75557 13.5667 1.33334 13.5667ZM1.33334 10.6V9.30002C1.65557 9.30002 1.93045 9.25002 2.15801 9.15002C2.38601 9.05002 2.61668 8.94179 2.85001 8.82535C3.08334 8.70846 3.34179 8.60268 3.62534 8.50802C3.90845 8.41379 4.25557 8.36668 4.66668 8.36668C5.0889 8.36668 5.43601 8.41379 5.70801 8.50802C5.98045 8.60268 6.23334 8.70846 6.46668 8.82535C6.70001 8.94179 6.93334 9.05002 7.16668 9.15002C7.40001 9.25002 7.67779 9.30002 8.00001 9.30002C8.32223 9.30002 8.60001 9.25002 8.83334 9.15002C9.06668 9.05002 9.30001 8.94179 9.53334 8.82535C9.76668 8.70846 10.0222 8.60268 10.3 8.50802C10.5778 8.41379 10.9222 8.36668 11.3333 8.36668C11.7556 8.36668 12.1056 8.41379 12.3833 8.50802C12.6611 8.60268 12.9167 8.70846 13.15 8.82535C13.3833 8.94179 13.6167 9.05002 13.85 9.15002C14.0833 9.25002 14.3556 9.30002 14.6667 9.30002V10.6C14.2445 10.6 13.8918 10.55 13.6087 10.45C13.3251 10.35 13.0667 10.2418 12.8333 10.1253C12.6 10.0085 12.3722 9.90268 12.15 9.80802C11.9278 9.71379 11.6556 9.66668 11.3333 9.66668C11.0111 9.66668 10.7362 9.71379 10.5087 9.80802C10.2807 9.90268 10.0529 10.0085 9.82534 10.1253C9.59734 10.2418 9.34445 10.35 9.06668 10.45C8.7889 10.55 8.43334 10.6 8.00001 10.6C7.56668 10.6 7.20823 10.55 6.92468 10.45C6.64157 10.35 6.38623 10.2418 6.15868 10.1253C5.93068 10.0085 5.70557 9.90268 5.48334 9.80802C5.26112 9.71379 4.9889 9.66668 4.66668 9.66668C4.35557 9.66668 4.08623 9.71379 3.85868 9.80802C3.63068 9.90268 3.40001 10.0085 3.16668 10.1253C2.93334 10.2418 2.67512 10.35 2.39201 10.45C2.10845 10.55 1.75557 10.6 1.33334 10.6ZM1.33334 7.63335V6.33335C1.65557 6.33335 1.93045 6.28335 2.15801 6.18335C2.38601 6.08335 2.61668 5.97491 2.85001 5.85802C3.08334 5.74157 3.34179 5.63602 3.62534 5.54135C3.90845 5.44713 4.25557 5.40002 4.66668 5.40002C5.0889 5.40002 5.43601 5.44713 5.70801 5.54135C5.98045 5.63602 6.23334 5.74157 6.46668 5.85802C6.70001 5.97491 6.93334 6.08335 7.16668 6.18335C7.40001 6.28335 7.67779 6.33335 8.00001 6.33335C8.32223 6.33335 8.60001 6.28335 8.83334 6.18335C9.06668 6.08335 9.30001 5.97491 9.53334 5.85802C9.76668 5.74157 10.0222 5.63602 10.3 5.54135C10.5778 5.44713 10.9222 5.40002 11.3333 5.40002C11.7556 5.40002 12.1056 5.44713 12.3833 5.54135C12.6611 5.63602 12.9167 5.74157 13.15 5.85802C13.3833 5.97491 13.6167 6.08335 13.85 6.18335C14.0833 6.28335 14.3556 6.33335 14.6667 6.33335V7.63335C14.2445 7.63335 13.8918 7.58335 13.6087 7.48335C13.3251 7.38335 13.0667 7.27513 12.8333 7.15868C12.6 7.04179 12.3722 6.93602 12.15 6.84135C11.9278 6.74713 11.6556 6.70002 11.3333 6.70002C11.0222 6.70002 10.7529 6.74713 10.5253 6.84135C10.2973 6.93602 10.0693 7.04179 9.84134 7.15868C9.61379 7.27513 9.35845 7.38335 9.07534 7.48335C8.79179 7.58335 8.43334 7.63335 8.00001 7.63335C7.56668 7.63335 7.20823 7.58335 6.92468 7.48335C6.64157 7.38335 6.38623 7.27513 6.15868 7.15868C5.93068 7.04179 5.70557 6.93602 5.48334 6.84135C5.26112 6.74713 4.9889 6.70002 4.66668 6.70002C4.35557 6.70002 4.08623 6.74713 3.85868 6.84135C3.63068 6.93602 3.40001 7.04179 3.16668 7.15868C2.93334 7.27513 2.67512 7.38335 2.39201 7.48335C2.10845 7.58335 1.75557 7.63335 1.33334 7.63335ZM1.33334 4.66668V3.36668C1.65557 3.36668 1.93045 3.31668 2.15801 3.21668C2.38601 3.11668 2.61668 3.00824 2.85001 2.89135C3.08334 2.77491 3.34179 2.66935 3.62534 2.57468C3.90845 2.48046 4.25557 2.43335 4.66668 2.43335C5.0889 2.43335 5.43601 2.48046 5.70801 2.57468C5.98045 2.66935 6.23334 2.77491 6.46668 2.89135C6.70001 3.00824 6.93334 3.11668 7.16668 3.21668C7.40001 3.31668 7.67779 3.36668 8.00001 3.36668C8.32223 3.36668 8.60001 3.31668 8.83334 3.21668C9.06668 3.11668 9.30001 3.00824 9.53334 2.89135C9.76668 2.77491 10.0222 2.66935 10.3 2.57468C10.5778 2.48046 10.9222 2.43335 11.3333 2.43335C11.7556 2.43335 12.1056 2.48046 12.3833 2.57468C12.6611 2.66935 12.9167 2.77491 13.15 2.89135C13.3833 3.00824 13.6167 3.11668 13.85 3.21668C14.0833 3.31668 14.3556 3.36668 14.6667 3.36668V4.66668C14.2445 4.66668 13.8918 4.61668 13.6087 4.51668C13.3251 4.41668 13.0667 4.30824 12.8333 4.19135C12.6 4.07491 12.3722 3.96935 12.15 3.87468C11.9278 3.78046 11.6556 3.73335 11.3333 3.73335C11.0222 3.73335 10.7529 3.78046 10.5253 3.87468C10.2973 3.96935 10.0693 4.07491 9.84134 4.19135C9.61379 4.30824 9.35845 4.41668 9.07534 4.51668C8.79179 4.61668 8.43334 4.66668 8.00001 4.66668C7.56668 4.66668 7.20823 4.61668 6.92468 4.51668C6.64157 4.41668 6.38623 4.30824 6.15868 4.19135C5.93068 4.07491 5.70557 3.96935 5.48334 3.87468C5.26112 3.78046 4.9889 3.73335 4.66668 3.73335C4.35557 3.73335 4.08623 3.78046 3.85868 3.87468C3.63068 3.96935 3.40001 4.07491 3.16668 4.19135C2.93334 4.30824 2.67512 4.41668 2.39201 4.51668C2.10845 4.61668 1.75557 4.66668 1.33334 4.66668Z" fill="#1C1B1F" />
                        </svg>
                    </div>
                    <div className='text-black'>
                        <div>
                            Pressure
                        </div>
                        <div>
                            {data.main.pressure} hpa
                        </div>
                    </div>
                </div>
                <div className='pl-[11px] flex items-center bg-[#D0BCFF]/30 w-[50%] h-[65px] rounded-[16px] gap-2'>
                    <div className='flex justify-center items-center rounded-[50%] bg-[white] w-[28px] h-[28px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 10C8.55555 10 9.02778 9.80558 9.41666 9.41669C9.80555 9.0278 10 8.55558 10 8.00002C10 7.44447 9.80555 6.97224 9.41666 6.58335C9.02778 6.19447 8.55555 6.00002 8 6.00002C7.44444 6.00002 6.97222 6.19447 6.58333 6.58335C6.19444 6.97224 6 7.44447 6 8.00002C6 8.55558 6.19444 9.0278 6.58333 9.41669C6.97222 9.80558 7.44444 10 8 10ZM8 11.3334C7.07778 11.3334 6.29178 11.0082 5.642 10.358C4.99178 9.70824 4.66666 8.92224 4.66666 8.00002C4.66666 7.0778 4.99178 6.29158 5.642 5.64135C6.29178 4.99158 7.07778 4.66669 8 4.66669C8.92222 4.66669 9.70844 4.99158 10.3587 5.64135C11.0084 6.29158 11.3333 7.0778 11.3333 8.00002C11.3333 8.92224 11.0084 9.70824 10.3587 10.358C9.70844 11.0082 8.92222 11.3334 8 11.3334ZM1.33333 8.66669C1.14444 8.66669 0.98622 8.60269 0.858664 8.47469C0.730664 8.34713 0.666664 8.18891 0.666664 8.00002C0.666664 7.81113 0.730664 7.65269 0.858664 7.52469C0.98622 7.39713 1.14444 7.33335 1.33333 7.33335H2.66666C2.85555 7.33335 3.014 7.39713 3.142 7.52469C3.26955 7.65269 3.33333 7.81113 3.33333 8.00002C3.33333 8.18891 3.26955 8.34713 3.142 8.47469C3.014 8.60269 2.85555 8.66669 2.66666 8.66669H1.33333ZM13.3333 8.66669C13.1444 8.66669 12.9862 8.60269 12.8587 8.47469C12.7307 8.34713 12.6667 8.18891 12.6667 8.00002C12.6667 7.81113 12.7307 7.65269 12.8587 7.52469C12.9862 7.39713 13.1444 7.33335 13.3333 7.33335H14.6667C14.8556 7.33335 15.0138 7.39713 15.1413 7.52469C15.2693 7.65269 15.3333 7.81113 15.3333 8.00002C15.3333 8.18891 15.2693 8.34713 15.1413 8.47469C15.0138 8.60269 14.8556 8.66669 14.6667 8.66669H13.3333ZM8 3.33335C7.81111 3.33335 7.65289 3.26935 7.52533 3.14135C7.39733 3.0138 7.33333 2.85558 7.33333 2.66669V1.33335C7.33333 1.14446 7.39733 0.98602 7.52533 0.85802C7.65289 0.730465 7.81111 0.666687 8 0.666687C8.18889 0.666687 8.34733 0.730465 8.47533 0.85802C8.60289 0.98602 8.66666 1.14446 8.66666 1.33335V2.66669C8.66666 2.85558 8.60289 3.0138 8.47533 3.14135C8.34733 3.26935 8.18889 3.33335 8 3.33335ZM8 15.3334C7.81111 15.3334 7.65289 15.2694 7.52533 15.1414C7.39733 15.0138 7.33333 14.8556 7.33333 14.6667V13.3334C7.33333 13.1445 7.39733 12.9862 7.52533 12.8587C7.65289 12.7307 7.81111 12.6667 8 12.6667C8.18889 12.6667 8.34733 12.7307 8.47533 12.8587C8.60289 12.9862 8.66666 13.1445 8.66666 13.3334V14.6667C8.66666 14.8556 8.60289 15.0138 8.47533 15.1414C8.34733 15.2694 8.18889 15.3334 8 15.3334ZM3.76666 4.70002L3.05 4.00002C2.91666 3.8778 2.85266 3.72224 2.858 3.53335C2.86378 3.34447 2.92778 3.18335 3.05 3.05002C3.18333 2.91669 3.34444 2.85002 3.53333 2.85002C3.72222 2.85002 3.87778 2.91669 4 3.05002L4.7 3.76669C4.82222 3.90002 4.88333 4.05558 4.88333 4.23335C4.88333 4.41113 4.82222 4.56669 4.7 4.70002C4.57778 4.83335 4.42511 4.89713 4.242 4.89135C4.05844 4.88602 3.9 4.82224 3.76666 4.70002ZM12 12.95L11.3 12.2334C11.1778 12.1 11.1167 11.9418 11.1167 11.7587C11.1167 11.5751 11.1778 11.4222 11.3 11.3C11.4222 11.1667 11.5751 11.1029 11.7587 11.1087C11.9418 11.114 12.1 11.1778 12.2333 11.3L12.95 12C13.0833 12.1222 13.1473 12.2778 13.142 12.4667C13.1362 12.6556 13.0722 12.8167 12.95 12.95C12.8167 13.0834 12.6556 13.15 12.4667 13.15C12.2778 13.15 12.1222 13.0834 12 12.95ZM11.3 4.70002C11.1667 4.5778 11.1029 4.42491 11.1087 4.24135C11.114 4.05824 11.1778 3.90002 11.3 3.76669L12 3.05002C12.1222 2.91669 12.2778 2.85269 12.4667 2.85802C12.6556 2.8638 12.8167 2.9278 12.95 3.05002C13.0833 3.18335 13.15 3.34447 13.15 3.53335C13.15 3.72224 13.0833 3.8778 12.95 4.00002L12.2333 4.70002C12.1 4.82224 11.9444 4.88335 11.7667 4.88335C11.5889 4.88335 11.4333 4.82224 11.3 4.70002ZM3.05 12.95C2.91666 12.8167 2.85 12.6556 2.85 12.4667C2.85 12.2778 2.91666 12.1222 3.05 12L3.76666 11.3C3.9 11.1778 4.05844 11.1167 4.242 11.1167C4.42511 11.1167 4.57778 11.1778 4.7 11.3C4.83333 11.4222 4.89733 11.5751 4.892 11.7587C4.88622 11.9418 4.82222 12.1 4.7 12.2334L4 12.95C3.87778 13.0834 3.72222 13.1471 3.53333 13.1414C3.34444 13.136 3.18333 13.0722 3.05 12.95Z" fill="#1C1B1F" />
                        </svg>
                    </div>
                    <div className='text-black'>
                        <div>
                            UV Index
                        </div>
                        <div>
                            {uvindex.value}
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-2 pl-4 pr-4'>
                <div className='pl-[11px] pt-2 flex bg-[#D0BCFF]/30 h-[150px] rounded-[16px] gap-2'>
                    <div className='flex justify-center items-center rounded-[50%] bg-[white] w-[28px] h-[28px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M9.20003 10.1333L6.33337 7.26667V3.66667H7.6667V6.73334L10.1334 9.2L9.20003 10.1333ZM0.900032 9.71667C0.755588 9.39445 0.638921 9.06111 0.550033 8.71667C0.461144 8.37222 0.400033 8.02222 0.366699 7.66667H1.7167C1.75003 7.9 1.79714 8.13334 1.85803 8.36667C1.91937 8.6 1.99448 8.82778 2.08337 9.05L0.900032 9.71667ZM0.366699 6.33333C0.400033 5.97778 0.461144 5.62489 0.550033 5.27467C0.638921 4.92489 0.761144 4.58889 0.916699 4.26667L2.08337 4.93333C1.99448 5.15556 1.91937 5.38334 1.85803 5.61667C1.79714 5.85 1.75003 6.08889 1.7167 6.33333H0.366699ZM3.1167 12.4333C2.8167 12.2111 2.53892 11.9693 2.28337 11.708C2.02781 11.4471 1.78892 11.1667 1.5667 10.8667L2.73337 10.2C2.88892 10.4 3.05292 10.586 3.22537 10.758C3.39737 10.9304 3.58337 11.0944 3.78337 11.25L3.1167 12.4333ZM2.75003 3.78334L1.5667 3.11667C1.78892 2.81667 2.02781 2.53889 2.28337 2.28334C2.53892 2.02778 2.8167 1.78889 3.1167 1.56667L3.78337 2.75C3.59448 2.90556 3.41403 3.06934 3.24203 3.24134C3.06959 3.41378 2.90559 3.59445 2.75003 3.78334ZM6.33337 13.6333C5.97781 13.6 5.62514 13.5389 5.27537 13.45C4.92514 13.3611 4.58892 13.2389 4.2667 13.0833L4.93337 11.9167C5.15559 12.0056 5.38337 12.0804 5.6167 12.1413C5.85003 12.2027 6.08892 12.25 6.33337 12.2833V13.6333ZM4.93337 2.08334L4.2667 0.916669C4.58892 0.761113 4.92514 0.638891 5.27537 0.550002C5.62514 0.461113 5.97781 0.400002 6.33337 0.366669V1.71667C6.08892 1.75 5.85003 1.79711 5.6167 1.858C5.38337 1.91934 5.15559 1.99445 4.93337 2.08334ZM7.6667 13.6333V12.2833C7.91114 12.25 8.15003 12.2027 8.38336 12.1413C8.6167 12.0804 8.84448 12.0056 9.0667 11.9167L9.73337 13.0833C9.41114 13.2389 9.07514 13.3611 8.72537 13.45C8.37514 13.5389 8.02225 13.6 7.6667 13.6333ZM9.0667 2.08334C8.84448 1.99445 8.6167 1.91934 8.38336 1.858C8.15003 1.79711 7.91114 1.75 7.6667 1.71667V0.366669C8.02225 0.400002 8.37514 0.461113 8.72537 0.550002C9.07514 0.638891 9.41114 0.761113 9.73337 0.916669L9.0667 2.08334ZM10.8834 12.4333L10.2167 11.25C10.4056 11.0944 10.5863 10.9304 10.7587 10.758C10.9307 10.586 11.0945 10.4056 11.25 10.2167L12.4334 10.8833C12.2111 11.1833 11.9723 11.4638 11.7167 11.7247C11.4611 11.986 11.1834 12.2222 10.8834 12.4333ZM11.25 3.78334C11.0945 3.59445 10.9307 3.41378 10.7587 3.24134C10.5863 3.06934 10.4056 2.90556 10.2167 2.75L10.8834 1.56667C11.1834 1.77778 11.4611 2.01111 11.7167 2.26667C11.9723 2.52222 12.2056 2.8 12.4167 3.1L11.25 3.78334ZM12.2834 6.33333C12.25 6.08889 12.2029 5.85 12.142 5.61667C12.0807 5.38334 12.0056 5.15556 11.9167 4.93333L13.0834 4.25C13.2278 4.58333 13.3474 4.92489 13.442 5.27467C13.5363 5.62489 13.6 5.97778 13.6334 6.33333H12.2834ZM13.0834 9.73333L11.9167 9.06667C12.0056 8.84445 12.0807 8.61667 12.142 8.38333C12.2029 8.15 12.25 7.91111 12.2834 7.66667H13.6334C13.6 8.02222 13.5389 8.37489 13.45 8.72467C13.3611 9.07489 13.2389 9.41111 13.0834 9.73333Z" fill="#1C1B1F" />
                        </svg>
                    </div>
                    <div className='text-black'>
                        <div>
                            Hourly forecast
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-2 pl-4 pr-4'>
                <div className='pl-[11px] pt-2 flex bg-[#D0BCFF]/30 h-[150px] rounded-[16px] gap-2'>
                    <div className='flex justify-center items-center rounded-[50%] bg-[white] w-[28px] h-[28px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                            <path d="M1.33333 13.6666C0.966667 13.6666 0.652667 13.5361 0.391333 13.2753C0.130444 13.0139 0 12.6999 0 12.3333V2.99992C0 2.63325 0.130444 2.31947 0.391333 2.05859C0.652667 1.79725 0.966667 1.66659 1.33333 1.66659H2V0.333252H3.33333V1.66659H8.66667V0.333252H10V1.66659H10.6667C11.0333 1.66659 11.3473 1.79725 11.6087 2.05859C11.8696 2.31947 12 2.63325 12 2.99992V12.3333C12 12.6999 11.8696 13.0139 11.6087 13.2753C11.3473 13.5361 11.0333 13.6666 10.6667 13.6666H1.33333ZM1.33333 12.3333H10.6667V5.66658H1.33333V12.3333ZM1.33333 4.33325H10.6667V2.99992H1.33333V4.33325ZM6 8.33325C5.81111 8.33325 5.65289 8.26925 5.52533 8.14125C5.39733 8.0137 5.33333 7.85547 5.33333 7.66658C5.33333 7.4777 5.39733 7.31925 5.52533 7.19125C5.65289 7.0637 5.81111 6.99992 6 6.99992C6.18889 6.99992 6.34733 7.0637 6.47533 7.19125C6.60289 7.31925 6.66667 7.4777 6.66667 7.66658C6.66667 7.85547 6.60289 8.0137 6.47533 8.14125C6.34733 8.26925 6.18889 8.33325 6 8.33325ZM3.33333 8.33325C3.14444 8.33325 2.986 8.26925 2.858 8.14125C2.73044 8.0137 2.66667 7.85547 2.66667 7.66658C2.66667 7.4777 2.73044 7.31925 2.858 7.19125C2.986 7.0637 3.14444 6.99992 3.33333 6.99992C3.52222 6.99992 3.68067 7.0637 3.80867 7.19125C3.93622 7.31925 4 7.4777 4 7.66658C4 7.85547 3.93622 8.0137 3.80867 8.14125C3.68067 8.26925 3.52222 8.33325 3.33333 8.33325ZM8.66667 8.33325C8.47778 8.33325 8.31956 8.26925 8.192 8.14125C8.064 8.0137 8 7.85547 8 7.66658C8 7.4777 8.064 7.31925 8.192 7.19125C8.31956 7.0637 8.47778 6.99992 8.66667 6.99992C8.85556 6.99992 9.01378 7.0637 9.14133 7.19125C9.26933 7.31925 9.33333 7.4777 9.33333 7.66658C9.33333 7.85547 9.26933 8.0137 9.14133 8.14125C9.01378 8.26925 8.85556 8.33325 8.66667 8.33325ZM6 10.9999C5.81111 10.9999 5.65289 10.9359 5.52533 10.8079C5.39733 10.6804 5.33333 10.5221 5.33333 10.3333C5.33333 10.1444 5.39733 9.98614 5.52533 9.85858C5.65289 9.73059 5.81111 9.66658 6 9.66658C6.18889 9.66658 6.34733 9.73059 6.47533 9.85858C6.60289 9.98614 6.66667 10.1444 6.66667 10.3333C6.66667 10.5221 6.60289 10.6804 6.47533 10.8079C6.34733 10.9359 6.18889 10.9999 6 10.9999ZM3.33333 10.9999C3.14444 10.9999 2.986 10.9359 2.858 10.8079C2.73044 10.6804 2.66667 10.5221 2.66667 10.3333C2.66667 10.1444 2.73044 9.98614 2.858 9.85858C2.986 9.73059 3.14444 9.66658 3.33333 9.66658C3.52222 9.66658 3.68067 9.73059 3.80867 9.85858C3.93622 9.98614 4 10.1444 4 10.3333C4 10.5221 3.93622 10.6804 3.80867 10.8079C3.68067 10.9359 3.52222 10.9999 3.33333 10.9999ZM8.66667 10.9999C8.47778 10.9999 8.31956 10.9359 8.192 10.8079C8.064 10.6804 8 10.5221 8 10.3333C8 10.1444 8.064 9.98614 8.192 9.85858C8.31956 9.73059 8.47778 9.66658 8.66667 9.66658C8.85556 9.66658 9.01378 9.73059 9.14133 9.85858C9.26933 9.98614 9.33333 10.1444 9.33333 10.3333C9.33333 10.5221 9.26933 10.6804 9.14133 10.8079C9.01378 10.9359 8.85556 10.9999 8.66667 10.9999Z" fill="#1C1B1F" />
                        </svg>
                    </div>
                    <div className='text-black'>
                        <div>
                            Day forecast
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Weather