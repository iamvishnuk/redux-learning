import React from 'react'
import store from './test'

function Counter() {

  const increment = {type : "increment", value: 1}
  const decrement = {type : "decrement", value: -1}
  const increment2 = {type : "increment2", value : 2}

  store.subscribe(() => {

    document.getElementById('counter').innerHTML = store.getState().value
  })


  return (
    <div>
        <button onClick={() => store.dispatch(increment)}>Increment</button>
        <button onClick={() => store.dispatch(increment2)}>Increment</button>
        <span id='counter'>0</span>
        <button onClick={() => store.dispatch(decrement)}>Decrement</button>
    </div>
  )
}

export default Counter