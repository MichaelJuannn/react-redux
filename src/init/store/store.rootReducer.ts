import { combineReducers } from "@reduxjs/toolkit";
import restaurantReducer from "../../dataservices/slices/restaurant/slice";
import { restaurantApi } from "../../dataservices/api/restaurantApi";

const rootReducer = combineReducers({
  restaurant: restaurantReducer,
  [restaurantApi.reducerPath]: restaurantApi.reducer
})

export default rootReducer
