import React, { useState } from 'react'

export const UseStateDemo = () => {
    const [count,setCount] = useState(0)
    //var count = 0;
    
    //const [flag, setflag] = useState(false)
    //const [users, setusers] = useState([{},{},{}])
    //const [user, setuser] = useState({})
    //count --> state variable
    //setCount --> function to update the state variable
    //useState() -->hook
    //useState(0) --> initial value of the state variable

    const increseCount = () => {
        //count++;
        setCount(count+1);
        console.log(count);
    }

  return (
    <div>
        <h1 className="text-center">UseState Demo</h1>
        <h2>Count: {count}</h2>
        <button onClick={()=>increseCount()}>increse count</button>
        <button onClick={()=>{setCount(count-1)}}>decrese count</button>
    </div>
  )
}
