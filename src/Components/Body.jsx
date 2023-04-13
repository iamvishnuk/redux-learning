import React, { useState } from 'react'
import Counter2 from './Counter2'
import ChangeColor from './ChangeColor'
import { useDispatch, useSelector } from 'react-redux'
import { change_by_value } from '../Redux/counter/countSlice'

function Body() {

    const count = useSelector(state => state.count.value)
    const color = useSelector(state => state.color.value)
    const dispatch = useDispatch()

    const [value, setValue] = useState()

    return (
        <div style={{ display: "flex", justifyContent: "space-between", padding: "20px", textAlign: "center" }}>
            <Counter2 />
            <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                    <p style={{ fontSize: "5rem", margin: "0", fontWeight: "bolder", color }}>{count}</p>
                    <p htmlFor="">Please enter a value and presss increment</p>
                    <input
                        type="number"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <button onClick={() => dispatch(change_by_value(Number(value)))} >increment</button>
                </div>
            </div>
            <ChangeColor />
        </div>
    )
}

export default Body