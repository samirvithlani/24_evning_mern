import React, { useState } from 'react'
import "../assets/css/loader.css"

export const Loader = () => {
    const [isLoading, setisLoading] = useState(true)
  return (
    <>
    {
        isLoading && <div class="loader"></div>
    }
        
        <button onClick={()=>{setisLoading(false)}}>stop</button>
        <button onClick={()=>{setisLoading(true)}}>start</button>
    </>
  )
}
