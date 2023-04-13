import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name: "count",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        change_by_value: (state, action) =>{
            state.value += action.payload
        }
    }
})

export const { increment, decrement, change_by_value } = countSlice.actions
export default countSlice.reducer