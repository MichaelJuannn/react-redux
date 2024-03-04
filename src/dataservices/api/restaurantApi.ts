import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const restaurantApi = createApi({
  reducerPath: 'restaurantApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restaurant-api.dicoding.dev/' }),
  endpoints: (builder) => ({
    getAllRestaurants: builder.query<any, void>({
      query: () => ({ url: "list" }),
    })
  })
})

export const { useGetAllRestaurantsQuery } = restaurantApi
