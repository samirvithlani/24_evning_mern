//rafc
import React from 'react'
import { SubHeader } from './SubHeader'
import { MyButton } from '../common/MyButton'

export const Header = (props) => {

  console.log("header props...",props)

  const headerStyle = {
    
    position: 'sticky',
    backgroundColor: 'black',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    zIndex: '100',
    top: '0',
    left: '0',
  }


  return (
    <div style={headerStyle}>
        <h1>HEADER COMPONENT</h1>
        <p>{props.title}</p>
        <MyButton name="sub"></MyButton>

        {/* <SubHeader title ={props.title}></SubHeader> */}
    </div>
  )
}
