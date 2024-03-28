import { Link } from "react-router-dom"


export default function CheckoutBarItem({ name, price, image }) {
  return (
    <div className="">
      <div className=" h-24 p-4 rounded-md shadow-lg bg-stone-100 hover:cursor-pointer hover:shadow-lg transition duration-300">
        <div className="container flex h-full items-center">

          <div className="image" >
            <img src={image} alt="sadfasf" className="" width={"60px"} height={"60px"}/>
          </div>

          <div className="name p-4 flex justify-center flex-col">
            <div className="item-name font-semibold">
              {name}
            </div>

            <div className="item-price pb-2 font-bold">
              ${price}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}