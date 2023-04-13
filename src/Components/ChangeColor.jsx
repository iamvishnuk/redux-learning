import React from 'react'
import randomColor from 'randomcolor'
import { useSelector, useDispatch } from 'react-redux'
import { change_color } from '../Redux/color/colorSlice'

function ChangeColor() {

    const color = useSelector(state => state.color.value)
    const dispatch = useDispatch()

    const change_Color = () => {
        dispatch(change_color({
            color: randomColor()
        }))
    }

    return (
        <di style={{ border: "1px solid", padding: "10px" }} >
            <h2 style={{color}}>Change Color My Color</h2>
            <button onClick={change_Color} >Change</button>
        </di>
    )
}

export default ChangeColor