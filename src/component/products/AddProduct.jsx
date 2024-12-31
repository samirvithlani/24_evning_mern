import React, { useContext } from 'react'
import { ProductContext } from './context'

export const AddProduct = () => {

    const {productDispatcher} = useContext(ProductContext)
    const submithandler =()=>{

        //productDispatcher("ADD_PRODUCT",data)
        productDispatcher("ADD_PRODUCT",{id:103,name:"abc",price:100})
    }
    
  return (
    <div>
        <h1>FORM... onsubmit...</h1>
        <button onClick={()=>{submithandler()}}>SUBMIT..</button>
    </div>
  )
}
