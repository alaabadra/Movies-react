import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <NavLink className="navbar-brand" to="/">
      Home
    </NavLink>
    <div className="navbar-collapse">
      <ul className="navbar-ul">
        <li className="nav-item">
          <NavLink className="nav-link" to="/search">
            Search
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" href='movie-list' to="/movie-list">
            Movie List
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
export default Navbar;
