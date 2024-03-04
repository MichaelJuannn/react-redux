import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./store.rootReducer";
import { restaurantApi } from "../../dataservices/api/restaurantApi";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(restaurantApi.middleware)
})

export type IRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
