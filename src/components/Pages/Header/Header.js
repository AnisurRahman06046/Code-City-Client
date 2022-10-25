import React from "react";
import { Link } from "react-router-dom";
import logoPic from "../../../assets/logo.png";

const Header = () => {
  return (
    <div className="navbar bg-primary  text-primary-content">
      <div className="flex-1 ">
        <img style={{ height: "30px" }} src={logoPic} alt="" />
        <Link className="btn btn-ghost normal-case text-xl">CodeCity</Link>
      </div>
      <div className="flex-none ">
        <ul className="menu menu-horizontal  p-0">
          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
