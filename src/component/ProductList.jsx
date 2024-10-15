import React, { useState } from 'react'

export const ProductList = () => {
    const [products, setproducts] = useState([
        {
            id:101,
            name:"iphone",
            price:1200,
            qty:1
        },
        {
            id:102,
            name:"ipad",
            price:900,
            qty:2
        },
        {
            id:103,
            name:"laptop",
            price:700,
            qty:10
        }

    ])
    const deleteProduct = (id) => {
        //alert(id)
        //101
        //  let prod = products.filter((prod)=>prod.id !== id)
        // console.log(prod)
        // setproducts(prod)
        setproducts(products.filter((prod)=>prod.id !== id))
    }
  return (
    <div>
        <h1>PRODUCT LIST</h1>
        <table className="table table-dark">
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {
                    products.map((prod)=>{
                        return(
                            <tr>
                                <td>{prod.id}</td>
                                <td>{prod.name}</td>
                                <td>{prod.price}</td>
                                <td>{prod.qty}</td>
                                <td>
                                    <button  onClick ={()=>{deleteProduct(prod.id)}}className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
