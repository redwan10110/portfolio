import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#skill">Skill</a>
      </li>
      <li>
        <a href="#project">Project</a>
      </li>
      {/* <li>
        <a href="service">Service</a>
      </li> */}
      <li>
        <a href="#contact">Contact</a>
      </li>
      {/* {user && (
        <li>
          <a href="dashboard">Dashboard</a>
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
          <a href="login">Login</a>
        )}
      </li> */}
    </>
  );
  return (
    <div className="navbar bg-primary sticky top-0 lg:px-12 px-6" >
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
        <a href="home" className="normal-case text-xl text-white">
        <span className="text-4xl text-secondary">R</span>edwan
        </a>
      </div>
      <div className="navbar-end hidden lg:flex text-white">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
