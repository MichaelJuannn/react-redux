import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Restaurant, RestaurantDetails } from "../../types/types";

type RestaurantResponse = {
  error: boolean;
  message: string;
  count: number;
  restaurants: Restaurant[]
}

type SearchRestaurantResponse = {
  error: boolean;
  founded: number;
  restaurants: Restaurant[]
}

type RestaurantDetailsResponse = {
  error: boolean;
  message: string;
  restaurant: RestaurantDetails
}
export const restaurantApi = createApi({
  reducerPath: 'restaurantApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restaurant-api.dicoding.dev/' }),
  endpoints: (builder) => ({
    getAllRestaurants: builder.query<RestaurantResponse, void>({
      query: () => ({ url: "list" }),
      transformResponse: (response: RestaurantResponse) => {
        response.restaurants.forEach((restaurant, i) => {
          if (i % 3 === 0) {
            restaurant.isOpen = true
            restaurant.price = 50000
          } else {
            restaurant.isOpen = false
            restaurant.price = 100000
          }

        })
        return response
      }
    }),
    getRestaurantDetails: builder.query<RestaurantDetailsResponse, string>({
      query: (id) => ({ url: `detail/${id}` })
    }),
    searchRestaurant: builder.query<SearchRestaurantResponse, string>({
      query: (q) => ({ url: `search?q=${q}` })
    })
  })
})

export const { useGetAllRestaurantsQuery, useGetRestaurantDetailsQuery, useSearchRestaurantQuery } = restaurantApi
