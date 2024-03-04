import { createSlice } from "@reduxjs/toolkit";

type RestaurantFilterState = {
  isOpen: boolean
  category: string
  priceRange: number
}

const initialState: RestaurantFilterState = {
  isOpen: false,
  category: "",
  priceRange: 0,
}
export const restaurantFilterSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {

  }
})

export const { } = restaurantFilterSlice.actions

export default restaurantFilterSlice.reducer
