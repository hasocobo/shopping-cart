import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavLink = function({link, name}) {
  return (
    <div className="p-2 items-center justify-center rounded-lg hover:text-blue-500 transition hover:cursor-pointer">
      <Link to={link} className="">
        {name}
      </Link>
    </div>
  )
}


NavLink.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string,
}

export default NavLink;
