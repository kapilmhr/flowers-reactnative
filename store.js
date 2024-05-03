import { configureStore } from '@reduxjs/toolkit'
import flowerReducer, { flowerSlice } from './components/flowerReducer'

export const store = configureStore({
  reducer: {
      flower: flowerReducer
  },
})