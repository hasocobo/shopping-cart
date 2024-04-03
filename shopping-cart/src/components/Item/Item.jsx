import { Link } from "react-router-dom"


export default function Item({ name, price, image, link }) {
  return (
    <Link to={link}>
      <div className=" h-[550px] rounded-md shadow-md bg-white hover:cursor-pointer hover:shadow-lg transition duration-300">
        <div className="container flex flex-col h-full">

          <div className="image bg-blue-50 h-3/5 border-b" >
            <img src={image} alt={name} className=""/>
          </div>

          <div className="name h-2/5 p-2 flex justify-center items-center flex-col">
            <div className="item-name font-semibold text-center rounded-lg p-2">
              {name}
            </div>

            <div className="item-price text-amber-500 text-xl rounded-lg-b p-2 font-bold flex ">
              {price}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}