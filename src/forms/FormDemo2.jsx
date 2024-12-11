import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {
    const {register,handleSubmit,formState:{errors}} = useForm({mode:"all"})
    console.log("errors..",errors)
    const submitHandler = (data)=>{
        console.log(data)
    }

    const validateHobbies = (value)=>{
        return value?.length>=2 || "Select atleast 2 Hobbies"
    }
    
    const validationSchema ={
        age:{
            required:{
                value:true,
                message:"Age is Required*"
            },
            min:{
                value:18,
                message:"Min Age should be 18*"
            },
            max:{
                value:40,
                message:"Min Age should not gt 40*"

            }
        },
        mobile:{
            required:{
                value:true,
                message:"Mobile-No is Required*"
            },
            pattern:{
                value:/[6-9]{1}[0-9]{9}/,
                message:"Mobile No is not valid."
            }
        }
    }
  return (
    <div>
        <h1 style={{color:"red"}}>FORM VALIDATIONS</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name</label>
                <input type='text' {...register("name",{required:{value:true,message:"Name is Required*"}})}></input>
                <span>{errors?.name?.message}</span>
            </div>
            <div>
                <label>age</label>
                <input type='text' {...register("age",validationSchema.age)}></input>
                <span>{errors?.age?.message}</span>
            </div>
            <div>
                <label>Mobile</label>
                <input type='text' {...register("mobile",validationSchema.mobile)}></input>
                <span>{errors?.mobile?.message}</span>
            </div>
            <div>
                <label>HOBBIES</label>
                Cricket: <input type='checkbox' value="cricket"{...register("hobbies",{validate:validateHobbies})}></input>
                Chess: <input type='checkbox' value="chess"{...register("hobbies",{validate:validateHobbies})}></input>
                abc: <input type='checkbox' value="abc"{...register("hobbies",{validate:validateHobbies})}></input>
                <span>{errors?.hobbies?.message}</span>
            </div>
            <div>
                <input type='submit' value="submit"></input>
            </div>
        </form>
    </div>
  )
}
