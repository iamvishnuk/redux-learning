import {configureStore} from '@reduxjs/toolkit'
import colorReducer from './color/colorSlice'
import countReducer from './counter/countSlice'

export default configureStore({
    reducer:{
        color:colorReducer,
        count:countReducer
    }
})