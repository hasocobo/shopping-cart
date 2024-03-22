import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavLink = function({link, name}) {
  return (
    <nav className="p-2 items-center justify-center rounded-lg hover:text-blue-500 transition hover:cursor-pointer">
      <Link to={link} className="">
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
