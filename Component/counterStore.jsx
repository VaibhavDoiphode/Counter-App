import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counterReducer'

export const counterStore = configureStore({
    reducer:{
     counter:counterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      })
    
})