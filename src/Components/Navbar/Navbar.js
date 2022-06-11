import React from "react";
import { Link } from "react-router-dom";
import img from '../Header/redwan2.png'
const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/blog">Skill</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/service">Service</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      {/* {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )} */}
      {/* <li>
        {user ? (
          <>
            <button className="btn btn-ghost" onClick={logout}>
              Log Out
            </button>
            <p>{user?.displayName}</p>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li> */}
    </>
  );
  return (
    <div className="navbar bg-transparent sticky top-0 lg:px-12 px-6">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/home" className="normal-case text-xl text-white">
        <span className="text-4xl text-secondary">R</span>edwan
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex text-white">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
