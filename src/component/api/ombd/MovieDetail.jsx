import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetail = () => {
    const imdbID = useParams().id;
    const movieDetail = async ()=>{
        
        const res = await axios.get("http://www.omdbapi.com",{
            params:{
                apikey:"9d57be0b",
                i:imdbID
            }
        })
        console.log(res.data)
    }
  return (
    <div>
        {imdbID}
        <button onClick={()=>{movieDetail()}}>Movie Detail</button>
    </div>
  )
}
