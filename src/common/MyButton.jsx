import React from 'react'

export const MyButton = (props) => {
    //props ={name:"",clickHandler:()=>{}}
  return (
    // <button className='btn btn-primary' onClick={()=>{props.clickHandler()}}>{props.name}</button>
    // <button className={props.class} onClick={()=>{props.clickHandler()}}>{props.name}</button>
    <button className={props.class ? props.class : "btn btn-primary"} onClick={()=>{props.clickHandler()}}>{props.name}</button>
  )
}
