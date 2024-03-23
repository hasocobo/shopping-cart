import { Link } from "react-router-dom"

export default function Icon({ name, link }) {
  return (
    <div className="material-icons flex items-center justify-center icon">
      <Link to={link} className="icon">
        {name}
      </Link>
    </div>
  )
}