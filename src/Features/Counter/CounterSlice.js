import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedButtonId: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    selectButton: (state, action) => {
      state.selectedButtonId = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { selectButton } = counterSlice.actions

export default counterSlice.reducer