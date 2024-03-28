import { Link } from "react-router-dom"


export default function Item({ name, price, image, link }) {
  return (
    <Link to={link}>
      <div className=" h-[450px] rounded-md shadow-md bg-stone-50 hover:cursor-pointer hover:shadow-lg transition duration-300">
        <div className="container flex flex-col h-full">

          <div className="image bg-blue-50 h-3/5" >
            <img src={image} alt="sadfasf" className=""/>
          </div>

          <div className="name h-2/5 p-0 flex justify-center items-center flex-col">
            <div className="item-name font-semibold text-center">
              {name}
            </div>

            <div className="item-price bg-red-100 rounded-lg p-2 font-bold flex ">
              {price}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}