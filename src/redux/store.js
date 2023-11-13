import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import boolReducer from './bool'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    bool: boolReducer,
  },
})
