import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
    const deleteUser = async(id)=>{

      //const res = await axios.delete("https://node5.onrender.com/user/user/"+id)
      const res = await axios.delete(`https://node5.onrender.com/user/user/${id}`)
      console.log("response...",res)
      if(res.status === 204){
        alert("User deleted successfully")
        getUserData()
      }



    }

    useEffect(() => {
      
      getUserData()
      
    }, [])
    


  return (
    <div>
        <h1>API DEMO 1 GET API..</h1>
        {message}
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>AGE</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user)=>{
                return(
                  <tr>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>
                      <button onClick={()=>{deleteUser(user._id)}} className='btn btn-danger'>DELETE</button>
                    </td>
                  </tr>
                )
              }
              )
            }
          </tbody>
        </table>


       
        {/* <button onClick={()=>{getUserData()}}>Get User Data</button> */}
    </div>
  )
}
