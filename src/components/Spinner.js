import Image from 'next/image'
import React from 'react'
import Loader from "../img/loader.gif"
const Spinner = () => {
  return (
    <div className='h-[100vh] flex justify-center items-center'>
    <Image className="w-[200px] m-auto block " src={Loader} alt="Loading..."/>
    </div>
  )
}

export default Spinner