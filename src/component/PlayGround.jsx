import React from 'react'
import { MyButton } from '../common/MyButton'

export const PlayGround = () => {

    const test =()=>{
        alert("test")
    }
    
  return (
    <div>
        <h1>PlayGround</h1>
        <button onClick={test}>click me</button>
        <button onClick={()=>{test()}}>test</button>
        <MyButton class="btn btn-warning" name="add" clickHandler={test}></MyButton>
    </div>
  )
}
