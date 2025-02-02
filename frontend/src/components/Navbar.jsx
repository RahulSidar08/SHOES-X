import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../components/logo.jpg";
import { useState, useEffect } from "react";
import "./navbar.css";
export const Navbar = () => {

  return (
    <>
      <div className={"navbar"}>
        <div className={`nav-content`}>
          <Link>
            <h1 style={{ color: "yellow" }}>SHOES-X</h1>
          </Link>

          <nav className="nav-link">
            <NavLink style={{ color: "white" }} to="/">HOME</NavLink>
            <NavLink style={{ color: "white" }} to="/shop">Shop-Now</NavLink>
            <NavLink style={{ color: "white" }} >ABOUT</NavLink>
            <NavLink style={{ color: "white" }} >CONTACT</NavLink>
          </nav>

          <div className="btns">
            <Link to="/signup" className="login" href="">
              Signup
            </Link>
            <Link to="/login" className="login" href="">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
