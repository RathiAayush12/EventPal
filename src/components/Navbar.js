import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../style/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
    const user = JSON.parse(localStorage.getItem('user'));
  return (
    <nav>
      <Link to="/" className="eventpal">
        EventPal
      </Link>
      {user &&(
      <div className="nav-links">
        <NavLink className="navlink" to="/">
          Discover
        </NavLink>
        <NavLink className="navlink" to="/bookmarks">
          My Events
        </NavLink>
        <NavLink className="create" to="/create">
          + Create Event
        </NavLink>
        <button onClick={handleLogOut} className="logoutbtn">Logout</button>
      </div>)}
    </nav>
  );
};

export default Navbar;
