import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../components/logo.jpg";
import { useState, useEffect } from "react";
import "./navbar.css";
export const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handScroll);
    return () => {
      window.removeEventListener("scroll", handScroll);
    };
  }, []);

  return (
    <>
      <div className={`navbar ${sticky ? "sticky-content" : ""}`}>
        <div className={`nav-content`}>
          <Link>
          <h1 style={{color: "yellow"}}>SHOES-X</h1>
          </Link>

          <nav className="nav-link">
            <NavLink 
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              HOME
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Shop-Now
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              ABOUT
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              CONTACT
            </NavLink>
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
