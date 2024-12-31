import React, { useContext } from 'react'
import { ProductContext } from './context'

export const FilterProducts = () => {
    const {products,setproducts} = useContext(ProductContext)
    const filterProd = ()=>{
        var newData = products?.map((prod)=>{
            return {
                id:prod.id,
                name:prod.name.toUpperCase(),
                price:prod.price *10
            }
        })
        setproducts(newData)
    }
  return (
    <div>
        <h1>FilterProducts</h1>

        <button onClick={()=>{filterProd()}}>Change</button>
    </div>
  )
}
