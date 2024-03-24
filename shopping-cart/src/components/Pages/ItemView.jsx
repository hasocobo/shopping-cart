import { Link, useParams } from "react-router-dom"
import Item from "../Item/Item"


export default function ItemView({ item }) {
  let { itemId } = useParams();
  return (
    <div>
      {itemId}
      <h1>hello mars</h1>
    </div>
  )
}