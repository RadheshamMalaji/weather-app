import Image from 'next/image'
import React from 'react'
import Loader from "../img/loader.gif"
const Spinner = () => {
  return (
    <Image className="w-[200px] m-auto block " src={Loader} alt="Loading..."/>
  )
}

export default Spinner