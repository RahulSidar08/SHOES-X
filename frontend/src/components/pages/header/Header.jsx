import React from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="items">
          <div>
            <p>Created By Rahul Sidar</p>
          </div>

          <div className="items2">
            <div className="icons">
            <p>Let's Connect </p>
              <Link>
                <FaFacebookF />
              </Link>
              <Link>
                <FaInstagram />
              </Link>
              <Link>
                <FaXTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
