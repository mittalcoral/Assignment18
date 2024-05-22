import { createSlice } from '@reduxjs/toolkit'

let counterSlice = createSlice({
    name: 'counter',
    initialState:{value:0},
    reducers:{
        Increment:(state)=>{
           state.value++
        },
        Decrement:(state)=>{
             state.value--
        },
        Incrementby10:(state, action)=>{
           state.value+=action.payload
        }
    }
})

export default counterSlice.reducer
export const {Increment,Decrement, Incrementby10} = counterSlice.actions
