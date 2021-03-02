import React from "react";
import { Link } from "react-router-dom";

export default function Dropdown(props) {
  return (
    <div>
      <div
        className={
          props.isOpen
            ? "grid grid-rows-2 text-center items-center fixed bg-yellow-300  text-black  top-16 inset-x-0"
            : "hidden"
        }
        onClick={props.toggle}
      >
        <Link to="/">Home</Link>
        <Link to="/about">about </Link>
      </div>
    </div>
  );
}
