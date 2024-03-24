import { Link } from "react-router-dom"
import Item from "../Item/Item"
import { useEffect } from "react"
import { useState } from "react"
//import { getItems } from "../Item/getItem"



export default function Store({ data }) {

  return (
    <div className="max-w-6xl py-4 mx-auto">
      <h1 className="text-2xl mb-8 font-bold">
        Items
      </h1>
      <div id="store">
        {data.map((item, index) => (
          <Item name={item.title} key={index} price={item.price+"$"} link={`/store/${index}`} image={item.image}> </Item>
        ))}
      </div>
    </div>
  )
}