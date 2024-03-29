import { useDispatch } from "react-redux";
import { changeIsOpen, setCategory, setPrice } from "../dataservices/slices/restaurantSlice";
import { useAppSelector } from "../hooks/reduxSelector";
export function Filter() {
  const dispatch = useDispatch()
  const restaurantsFilter = useAppSelector((state) => state.restaurant)

  return (
    <>
      <div className="flex p-4 border-t border-b gap-x-4 items-center">
        <div>Filter By</div>
        <div className="border p-1 rounded shadow-lg">
          <input type="checkbox" name="isOpen" id="isOpen" checked={restaurantsFilter.isOpen} onChange={() => dispatch(changeIsOpen())} />
          <label htmlFor="isOpen"> Open Now</label>
        </div>
        <div>
          <input type="number" name="price" id="price" placeholder="Price" className="appearance-none p-1 border" value={restaurantsFilter.priceLimit} onChange={(e) => dispatch(setPrice(e.currentTarget.value))} />
        </div>
        <div>
          <input type="text" name="category" value={restaurantsFilter.category} id="category" placeholder="Category" className="appearance-none p-1 border" onChange={(e) => dispatch(setCategory(e.currentTarget.value))} />
        </div>
      </div>
    </>
  )
}
