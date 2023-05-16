import {configureStore} from '@reduxjs/toolkit'
import googleReducer from '../../features/googleTokenSlice'
export const store = configureStore({
    reducer:{
        googleToken: googleReducer
    }
})