import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Restaurant } from "../../types/types";

type RestaurantResponse = {
  error: boolean;
  message: string;
  count: number;
  restaurants: Restaurant[]
}
export const restaurantApi = createApi({
  reducerPath: 'restaurantApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restaurant-api.dicoding.dev/' }),
  endpoints: (builder) => ({
    getAllRestaurants: builder.query<RestaurantResponse, void>({
      query: () => ({ url: "list" }),
    })
  })
})

export const { useGetAllRestaurantsQuery } = restaurantApi
