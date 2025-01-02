import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/conunter/CounterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})