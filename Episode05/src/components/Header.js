import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { NavLink, Link, useParams } from "react-router-dom";
import './RestaurentMenu.css';
import useOnlineStatus from '../utils/useOnlineStatus';


const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus= useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL} alt="App Logo" />
        </Link>
      </div>

      <div className="nav-items">
        <ul>
          <li className="px-6 py-3 text-white font-semibold text-sm rounded-full uppercase tracking-wide bg-white/15 border border-white/20 shadow-lg transition-all duration-300 transform hover:bg-white/25 hover:shadow-xl hover:-translate-y-1">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <NavLink to="/grocery" className={({ isActive }) => isActive ? "active" : ""}>Grocery</NavLink>
          </li>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={({ isActive }) => isActive ? "active" : ""}>Cart</NavLink>
          </li>
          <li>
            <button
              className={btnNameReact === "Login" ? "login" : "logout"}
              onClick={() =>
                setBtnNameReact(prev => prev === "Login" ? "Logout" : "Login")
              }
            >
              {btnNameReact}
            </button>
          </li>
        </ul> 
      </div>
    </div>
  );
};

export default Header;
