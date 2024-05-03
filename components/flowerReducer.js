import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedFlower: "",
  flowersList:[]
}

export const flowerSlice = createSlice({
  name: 'flower',
  initialState,
  reducers: {
    setSelectedFlower: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.selectedFlower = action.payload
    },
    setAllFlowers: (state,action) => {
      state.flowersList = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setSelectedFlower,setAllFlowers } = flowerSlice.actions

export default flowerSlice.reducer