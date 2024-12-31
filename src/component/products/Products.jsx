import React, { useState } from 'react'
import { AddProduct } from './AddProduct'
import { ViewProducts } from './ViewProducts'
import { ProductContext } from './context'

export const Products = () => {

    const [products, setproducts] = useState([
        {
            id:101,
            name:"ipad mini",
            price:1000
        },
        {
            id:102,
            name:"Pen",
            price:1
        }
    ])

    const productDispatcher = (ACTION,PAYLOAD)=>{

        switch(ACTION){
            case "ADD_PRODUCT":
                //console.log("adding product...",PAYLOAD)
                setproducts([...products,PAYLOAD])
            break;
            case "DELETE_PRODUCT":
                console.log("deleting product",PAYLOAD)
            break;
        }

    }


  return (
    <div>
        <ProductContext.Provider value={{products,setproducts,productDispatcher}}>
        <AddProduct/>
        <ViewProducts/>
        </ProductContext.Provider>
    </div>
  )
}
