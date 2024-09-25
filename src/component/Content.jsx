//rfc
import React from 'react'

export default function Content() {
    var sname ="amit"
    var age = 30
    var isActive = true
  return (
    <div style={{backgroundColor:"gray"}}>
        <h1>CONTENT</h1>
        <h1>HELLO ALL</h1>
        <h2>ALL TAG MUST HAVE CLOSING TAG</h2>
        {sname}
        <h1>NAme = {sname}</h1>
        <h2>Age : {age}</h2>
        <h2>
          {
            age>=18 ? <span style={{color:"green"}}>age = {age}</span> : <span color='red'>age = {age}</span>
          }
        </h2>
        <h2>isActive = {isActive == true? "Active":"Not Active"}</h2>
    </div>
  )
}
