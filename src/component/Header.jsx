//rafc
import React from 'react'

export const Header = () => {

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
    </div>
  )
}
