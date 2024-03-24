import { Link, useParams } from "react-router-dom"
import Item from "../Item/Item"


export default function ItemView({ items }) {
  let { itemId } = useParams();
  const Item = items.find((element) => element.id == itemId);
  return (
    <div className="max-w-6xl mx-auto py-20 h-[800px] ">
      <div className="container bg-stone-50 h-full flex rounded-lg shadow-lg">
        <div className="image w-2/5 border-r bg-white">
          <img src={Item.image} alt={Item.title} />
        </div>
        <div className="info-container w-3/5 h-full p-20">
          <div className="item-info flex flex-col items-center justify-center">
            <h1 className="text-bold text-3xl my-4 text-stone-700 p-4 bg-white rounded-md shadow">{Item.title}</h1>
            <div className="item-price flex justify-between bg-white rounded-md shadow">
              <h1 className="text-bold text-3xl text-amber-500 text-center border-r p-4">{Item.price}$</h1>
              <button className="p-4"> Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}