import { createSlice } from "@reduxjs/toolkit";

type RestaurantFilterState = {
  isOpen: boolean
  category: string
  priceLimit: number
}

const initialState: RestaurantFilterState = {
  isOpen: false,
  category: "",
  priceLimit: 0,
}
export const restaurantFilterSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    revIsOpen: (state) => {
      state.isOpen = !state.isOpen
    },
    setPrice: (state, action) => {
      state.priceLimit = action.payload
    },
    setCategory: (state, action) => {
      state.category = action.payload
    }
  }
})

export const { revIsOpen, setPrice, setCategory } = restaurantFilterSlice.actions

export default restaurantFilterSlice.reducer
