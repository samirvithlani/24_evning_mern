import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {
    //react-hook-form
    const {register,handleSubmit} = useForm()
    //register is an state object:
    //handleSubmit --> function
    const submitHandler = (data)=>{
        console.log(data)
    }
  return (
    <div>
        <h1>FORM DEMO 1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name</label>
                <input type='text'{...register("name")}></input>
            </div>
            <div>
                <label>Age</label>
                <input type='number' {...register("age")}></input>
            </div>
            <div>
                <label>Gender</label>
                <br></br>
                MALE<input type='radio' name='gender' {...register("gender")} value="male"></input> <br></br>
                FEMALE<input type='radio' name='gender' {...register("gender")} value="female"></input> <br></br>
            </div>
            <div>
                <label>Hobbies</label><br></br>
                Cricket <input type='checkbox' value="cricket" {...register("hobbies")} name='hobbies'></input><br></br>
                Football <input type='checkbox' value="football" {...register("hobbies")} name='hobbies'></input>
                Chess <input type='checkbox' value="chess" {...register("hobbies")} name='hobbies'></input><br></br>
            </div>
            <div>
                <label>Country</label>
                <select {...register("country")}>
                    <option value="india">INDIA</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                </select>

            </div>
            <div>
                <input type='submit' value="submit"></input>
            </div>
        </form>
    </div>
  )
}
