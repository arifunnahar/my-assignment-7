import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-5 w-full ">
      <div className="navbar bg-base-100">
        {/* Left: Logo */}
        <div className="navbar-start">
          <a className="btn btn-ghost font-bold text-2xl ">CS — Ticket System</a>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
          </ul>
          <a className="btn ml-4 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
            <span className="mr-1">+</span> New Ticket
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="navbar-end md:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            {/* {/menu} */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-60  "
            >
              <li>
                <a className="whitespace-nowrap text-[10px]">Home</a>
              </li>
              <li>
                <a className="whitespace-nowrap text-[10px]">FAQ</a>
              </li>
              <li>
                <a className="whitespace-nowrap text-[10px]">Changelog</a>
              </li>
              <li>
                <a className="whitespace-nowrap text-[10px]">Blog</a>
              </li>
              <li>
                <a className="whitespace-nowrap text-[10px]">Download</a>
              </li>
              <li>
                <a className="whitespace-nowrap text-[10px]">Contact</a>
              </li>
              <li className="mt-1 ">
                <button className="w-full text-white text-[8px] rounded-btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] whitespace-nowrap text-left">
               New Ticket
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
