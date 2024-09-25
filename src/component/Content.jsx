//rfc
import React from 'react'

export default function Content() {
    var sname ="amit"
    var age = 30
    var isActive = true
  return (
    <div>
        <h1>CONTENT</h1>
        <h1>HELLO ALL</h1>
        <h2>ALL TAG MUST HAVE CLOSING TAG</h2>
        {sname}
        <h1>NAme = {sname}</h1>
        <h2>Age : {age}</h2>
        <h2>isActive = {isActive == true? "Active":"Not Active"}</h2>
    </div>
  )
}
