import React, { useContext } from 'react'
import { ProductContext } from './context'
import { FilterProducts } from './FilterProducts'

export const ViewProducts = () => {
    const {products} = useContext(ProductContext)
  return (
    <div>
        <h1>View Products</h1>
        {
            products?.map((prod)=>{
                return <div>
                    <h1>{prod.id}</h1>
                    <h4>{prod.name}</h4>
                    <p>{prod.price}</p>
                </div>

            })
        }
        <FilterProducts/>
    </div>
  )
}
