
import { useParams } from "react-router-dom"
import { useGetRestaurantDetailsQuery } from "../../dataservices/api/restaurantApi";
import { memo } from "react";

const star = new Map([
  [1, '★'],
  [2, '★★'],
  [3, '★★★'],
  [4, '★★★★'],
  [5, '★★★★★'],
])


function View() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetRestaurantDetailsQuery(id as string)
  if (isLoading) return <div>Loading....</div>
  if (error) return <div className="text-xl text-red-400">some kind of error just happened</div>
  const restaurant = data?.restaurant
  if (!restaurant) return <div className="text-xl text-red-400">some kind of error just happened</div>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{restaurant.name} ({star.get(Math.round(restaurant.rating))})</h1>
      <img className="w-full h-64 object-cover mb-4" src={`https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}`} alt={restaurant.name} />
      <p className="mb-4">{restaurant.description}</p>
      <h2 className="text-xl font-bold mb-2">Categories</h2>
      <ul className="mb-4">
        {restaurant.categories.map((category, index) => (
          <li key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{category.name}</li>
        ))}
      </ul>
      <h2 className="text-xl font-bold mb-2">Menu</h2>
      <h3 className="font-bold mb-1">Foods</h3>
      <ul className="mb-4">
        {restaurant.menus.foods.map((food, index) => (
          <li key={index} className="mb-1">{food.name}</li>
        ))}
      </ul>
      <h3 className="font-bold mb-1">Drinks</h3>
      <ul className="mb-4">
        {restaurant.menus.drinks.map((drink, index) => (
          <li key={index} className="mb-1">{drink.name}</li>
        ))}
      </ul>
      <h2 className="text-xl font-bold mb-2">Reviews</h2>
      {restaurant.customerReviews.map((review, index) => (
        <div key={index} className="mb-4 border border-gray-200 rounded p-4">
          <h3 className="font-bold mb-1">{review.name}</h3>
          <p className="mb-1">{review.review}</p>
          <p className="text-sm text-gray-500">{review.date}</p>
        </div>
      ))}
    </div>
  );
}
export default memo(View)

