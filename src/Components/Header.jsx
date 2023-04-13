import React from 'react'
import { useSelector } from 'react-redux'

function Header() {

    const color = useSelector(state => state.color.value)
    const count = useSelector(state => state.count.value)

    return (
        <div style={{ border: "1px solid", display: "flex", justifyContent: "space-between", padding: "0px 10px" }}>
            <h1 style={{ color }}>Header</h1>

            <h1>Count is = {count} </h1>
        </div>
    )
}

export default Header