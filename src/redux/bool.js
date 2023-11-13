import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  ewan: false,
}

export const counterSlice = createSlice({
  name: 'trueorfalse',
  initialState,
  reducers: {
    changetotrue1: (state, action) => {
      state.ewan = !state.ewan
    },
  },
})

// Action creators are generated for each case reducer function
export const { changetotrue1 } = counterSlice.actions

export default counterSlice.reducer
