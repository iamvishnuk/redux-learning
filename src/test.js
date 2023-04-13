import { createStore } from "redux";

const initialstate = { value: 0 }

function appReducer(state = initialstate, action) {

    if (action.type === "increment") {
        state.value = state.value + action.value
        return state
    }else if(action.type === "increment2"){
        state.value = state.value + action.value
        return state
    }else if(action.type === "decrement") {
        state.value = state.value + action.value
        return state
    }
    return state

}

const store = createStore(appReducer)

const state = store.getState()

console.log(state)


export default store