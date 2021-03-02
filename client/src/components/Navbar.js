import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="flex flex-row justify-between items-center h-12 bg-blue-800  fixed top-0 inset-x-0">
      <Link to="/" className=" pl-20 text-white  ">
        MERN URL
      </Link>

      <div className="px-4 cursor-pointer md:hidden" onClick={props.toggle}>
        <svg
          className="h-8 w-8 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <div className="flex-row  md:block hidden space-x-10 pr-20">
        <Link className=" hover:text-gray-300 text-white" to="/">
          Home
        </Link>
        <Link className=" hover:text-gray-300 text-white" to="/top">
          Top Links
        </Link>

        <Link className=" hover:text-gray-300 text-white" to="/Contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}
