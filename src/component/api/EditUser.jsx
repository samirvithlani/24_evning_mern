import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

export const EditUser = () => {
    const id = useParams().id
    const{register,handleSubmit} = useForm({
        // defaultValues:{
        //     name:"test",
        //     email:"test@gmail.com"
        // }
        defaultValues:async()=>{
            const res = await axios.get("https://node5.onrender.com/user/user/"+id)
            console.log(res.data)
            return res.data.data
        }
    })
    const submitHandler = async(data)=>{
        console.log(data)
        delete data._id
        console.log(data)
        const res = await axios.put("https://node5.onrender.com/user/user/"+id,data)
        console.log(res.data)
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name</label>
                <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label>Email</label>
                <input type='text' {...register("email")}></input>
            </div>
            <div>
                <input type='submit' value="submit"></input>
            </div>
        </form>
    </div>
  )
}
