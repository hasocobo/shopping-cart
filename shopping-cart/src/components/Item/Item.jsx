import { Link } from "react-router-dom"


export default function Item({ name, price, image, link }) {
  return (
    <Link to={link}>
      <div className=" h-96 rounded-md shadow-md bg-stone-50 hover:cursor-pointer hover:shadow-lg transition duration-300">
        <div className="container flex flex-col h-full">

          <div className="image bg-blue-50 h-3/5" >
            <img src={image} alt="sadfasf" className=""/>
          </div>

          <div className="name h-2/5 p-0 flex justify-center items-center flex-col">
            <div className="item-name">
              {name}
            </div>

            <div className="item-price p-2 bg-white shadow rounded-md">
              {price}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}