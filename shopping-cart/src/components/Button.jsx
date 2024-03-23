import { Link } from "react-router-dom"

export default function Button({ name, link }) {
  return (
    <button className="p-2 rounded-[4px] bg-red-500 text-white duration-300 transition hover:bg-red-600">
      <Link to={link}>
        {name}
      </Link>
    </button>
  )
}