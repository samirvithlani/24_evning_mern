import React from 'react'
import { useParams } from 'react-router-dom'

export const PlayContent = () => {
  //fetch data from url..
  const {id} = useParams()
  //const abc = useParams().id
  console.log(useParams())
  return (
    <div>
        <h1>PLAY CONTENT.. {id}</h1>
    </div>
  )
}
