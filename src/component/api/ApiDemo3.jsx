import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo3 = () => {

    const [users, setusers] = useState([])
    const getUsers = async()=>{

        const res = await axios.get("https://reqres.in/api/users?page=2")
        console.log(res.data)
        setusers(res.data.data)


    }

  return (
    <div>
        <h1>API DEMO 3</h1>
        <button onClick={()=>{getUsers()}}>users</button>
        <ul>
            {
                users?.map((user)=>{
                    return(<li>
                        {user.id} -- {user.first_name + " " + user.last_name}
                    </li>)
                })
            }
        </ul>
    </div>
  )
}
