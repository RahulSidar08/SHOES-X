import React from "react";
import nike from "../components/nike.png"
import { Link } from "react-router-dom";
import "./maincontent.css"

export const HeroSection = () => {
  return (
    <>
      <div className="hero-content">
        <div className="contect-desc">
          <h1>YOUR FEET DESRVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WHERE HERE TO HELP 
            YOU WITH OUR SHOES . YOUR FEET DESERVE THE BEST AND WHERE 
            HERE TO HELP YOU WITH YOUR SHOES.
          </p>
        </div>
        <div className="content">
          <img src={nike} alt="" />
        </div>
      </div>
    </>
  );
};
