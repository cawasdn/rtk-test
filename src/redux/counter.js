import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  ewan: false,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    changetotrue: (state, action) => {
      state.ewan = !state.ewan
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, changetotrue } =
  counterSlice.actions

export default counterSlice.reducer
