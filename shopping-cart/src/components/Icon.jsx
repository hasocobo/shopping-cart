import { Link } from "react-router-dom"

export default function Icon({ name, link }) {
  return (
    <div className="material-icons flex items-center justify-center">
      <Link to={link}>
        {name}
      </Link>
    </div>
  )
}