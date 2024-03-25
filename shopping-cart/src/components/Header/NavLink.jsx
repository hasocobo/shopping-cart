import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavLink = function({link, name}) {
  return (
    <nav className="p-2 items-center justify-center rounded-lg ">
      <Link to={link} className="nav-link hover:text-red-600 duration-300 transition hover:cursor-pointer ">
        {name}
      </Link>
    </nav>
  )
}


NavLink.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string,
}

export default NavLink;
