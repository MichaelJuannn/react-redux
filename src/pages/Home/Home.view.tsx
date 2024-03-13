
import { useGetAllRestaurantsQuery, useSearchRestaurantQuery } from "../../dataservices/api/restaurantApi";
import Card from "../../components/Card";
import { useAppSelector } from "../../hooks/reduxSelector"
import { memo } from "react";
function View() {
  const filter = useAppSelector((state) => state.restaurant)

  const { data: allRestaurantsData } = useGetAllRestaurantsQuery()
  const { data: searchRestaurantsData } = useSearchRestaurantQuery(filter.category)
  const data = filter.category ? searchRestaurantsData : allRestaurantsData

  const restaurantCard = data?.restaurants
    .filter((restaurant) => filter.isOpen == false || restaurant.isOpen == true)
    .filter((restaurant) => filter.priceLimit === 0 || restaurant.price <= filter.priceLimit)
    .map((restaurant) => <Card key={restaurant.id} restaurant={restaurant} />)

  return (
    <div className="md:grid grid-cols-4">
      {restaurantCard}
    </div>
  )
}

export default memo(View)
