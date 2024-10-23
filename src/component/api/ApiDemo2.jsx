import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo2 = () => {
    const [posts, setposts] = useState([])
    const getPosts = async()=>{
        const res  = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(res.data)
        setposts(res.data)

    }

  return (
    <div>
        <h1>API DEMO 2</h1>
        <button onClick={()=>{getPosts()}}>get post</button>
        <ul>
            {
                posts?.map((post)=>{
                    return(
                        <li>{post.id} -- {post.title}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}
