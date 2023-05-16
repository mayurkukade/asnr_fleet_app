import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token :''
}

export const googleTokenSlice = createSlice({
    name:'googleToken',
    initialState,
    reducers:{
      tokenState:(state,action)=>{
        state.token= action.payload
      }
    }
})

export const {tokenState} =  googleTokenSlice.actions

export default googleTokenSlice.reducer