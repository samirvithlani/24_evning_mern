import React, { useState } from 'react'
import { useEffect } from 'react'

export const UseEffectDemo = () => {
    //()=>{}call back function, [] dependency array
    const [count, setcount] = useState(0)
    useEffect(()=>{
        console.log('useEffect called');
    },[count])
    
  return (
    <div>
        <button onClick={()=>{setcount(count+1)}}>Click</button>
        <h1>{count}</h1>
    </div>
  )
}
