import React from 'react'
import { useSelector } from 'react-redux'

function Footer() {

    const color = useSelector(state => state.color.value)

  return (
      <div style={{ backgroundColor: "whitesmoke", border: "1px solid", padding: "0px 10px", textAlign:"center" }}>
        <h1 style={{color}} >Footer</h1>
    </div>
  )
}

export default Footer