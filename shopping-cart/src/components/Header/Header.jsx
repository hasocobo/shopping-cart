import { Link } from "react-router-dom"
import NavLink from "./NavLink"
import Icon from "../Icon"
import Button from "../Button"
import SearchBar from "./SearchBar"



export default function Header({ itemCount=0 }) {
  return (
    <div className="sticky w-full bg-white bg-opacity-95 border-b font-semibold text-sm">
      <div className="max-w-7xl mx-auto">
        <div className="px-4 py-4">
          <div className="flex justify-between items-center">

            <div className="left">
              <NavLink name={"Home"} link={"/"} />
            </div>

            <SearchBar />

            <div className="right flex items-center gap-x-8">
              <NavLink name={"Store"} link={"/store"} />
              <Button name={"See More"} />
              <div className="shopping-cart-icon">
                <Icon link={"/"} name={"shopping_cart"} />
                <div className="item-count flex justify-center items-center">
                  <div>{itemCount}</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}