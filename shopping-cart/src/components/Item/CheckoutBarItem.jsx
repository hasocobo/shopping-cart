import { Link } from "react-router-dom"
import Icon from "../Icon"


export default function CheckoutBarItem({ item, onRemove }) {
  return (
    <div className="">
      <div className=" h-32 p-4 relative rounded-lg shadow-md bg-stone-100 hover:cursor-pointer hover:shadow-lg transition duration-300">
        <div className="absolute right-0 top-0 p-2 hover:bg-red-200 rounded-[50%] transition duration-300" onClick={() => onRemove(item)}>
          <Icon name={"delete"} />
        </div>
        <div className="container flex h-full items-center overflow-y-">

          <div className="image" >
            <img src={item.image} alt={item.name} className="" width={"60px"} height={"60px"} />
          </div>

          <div className="name p-4 flex justify-center flex-col">
            <div className="item-name font-semibold">
              {item.title}
            </div>

            <div className="item-price pb-2 font-bold text-amber-800">
              ${item.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}