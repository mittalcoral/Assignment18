import React from 'react'
import CounterReducer from './Counter'
import { configureStore } from '@reduxjs/toolkit'

export let store = configureStore({
    reducer:{
        counter:CounterReducer
    }
})


