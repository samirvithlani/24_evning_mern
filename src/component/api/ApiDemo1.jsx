import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {

    //promise...

    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])

    const getUserData=  async()=>{

      const res = await axios.get("https://node5.onrender.com/user/user")
      console.log("response...",res.data)
      setmessage(res.data.message)
      setusers(res.data.data)

    }



  return (
    <div>
        <h1>API DEMO 1 GET API..</h1>
        {message}
        {/* {users[0].name} */}
        {/* {
          users.length>0 && users[0].name
        } */}

          {/* {
            users[0]?.name
          } */}
          <ul>
          {
            users?.map((user)=>{
                return(
                  <li>{user.name}</li>
                )
                
            })
          }
          </ul>

        <button onClick={()=>{getUserData()}}>Get User Data</button>
    </div>
  )
}
