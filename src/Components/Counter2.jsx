import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from '../Redux/counter/countSlice'


function Counter2() {

    const count = useSelector(state => state.count.value)
    const dispatch = useDispatch()

    return (
        <div style={{ border: "1px solid", padding: "10px" }}>
            <h2>Counter</h2>
            <h3>The count is = {count}</h3>
            <button onClick={() => dispatch(increment())}>Increase</button>
            <button onClick={() => dispatch(decrement())}>Decrease</button>
        </div>
    )
}

export default Counter2