import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <Link className="site-logo" to="/">
          #VanLife
        </Link>
        <nav>
          <NavLink
            to="/host"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Host
          </NavLink>
          <NavLink
            to="/vans"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Vans
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            About
          </NavLink>
          <Link to="login" className="login-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person-circle user-image"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
