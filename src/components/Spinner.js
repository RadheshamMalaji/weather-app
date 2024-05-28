import React from 'react'
import Loader from "../../public/Loader.gif"
const Spinner = () => {
  return (
    <Image className="w-[200px] m-auto block " src={Loader} alt="Loading..."/>
  )
}

export default Spinner