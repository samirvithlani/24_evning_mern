import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const SearchMovie = () => {
    const [movies, setmovies] = useState([])
    const searchmovie = async () => {

        const res = await axios.get("http://www.omdbapi.com",{
            params:{
                apikey:"9d57be0b",
                s:"avatar"
            }
        })
        console.log(res.data)
        setmovies(res.data.Search)
    }
  return (
    <div>
        <h1>SEARCH MOVIE</h1>
        <button onClick={()=>{searchmovie()}}>Search Movie</button>
        <div className="row">
            {
                movies.map((movie)=>{
                    return(
                        <div className="col-md-4">
                            <div className="card">
                                <Link to ={`/moviedetail/${movie.imdbID}`}>
                                <img src={movie.Poster} className="card-img-top" alt="..."/>
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">{movie.Title}</h5>
                                    <p className="card-text">{movie.Year}</p>
                                    <p className="card-text">{movie.imdbID}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
    </div>
  )
}
