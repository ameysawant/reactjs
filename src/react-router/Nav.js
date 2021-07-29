import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <div className="dvNav">
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="contact">Contact</Link> */}
        <NavLink to="/" exact={true} activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/product" activeClassName="active">
          Product
        </NavLink>
        <NavLink to="/productapi" activeClassName="active">
          Product API
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </div>
    </>
  );
};

export default Nav;
