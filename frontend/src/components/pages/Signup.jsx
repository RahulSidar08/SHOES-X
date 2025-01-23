import React from "react";
import "./signup.css";
import { Link, NavLink } from "react-router-dom";
import { handleError } from "../../utils";
import { handleSuccess } from "../../utils";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { SIGNUP_URL } from "../../utils";
export const Signup = () => {
  const [loginInfo, setLoginInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = loginInfo;
    if (!firstName || !lastName || !email || !password) {
      return handleError("All fields are mandatory");
    }

    try {
      const response = await fetch(SIGNUP_URL, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });

      const result = await response.json();
      let {success , message ,error } = result;

      if(success)
      {
        handleSuccess(message)
      }else if(error)
      {
        const details = error?.details[0].message;
        handleError(details);
      }else if(!success)
      {
        handleError(message)
      }
      
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <>
      <div className="cont">
        <div className="container-1">
          <p className="para" style={{ fontFamily: "sans-serif", fontSize:'20px'}}>Create Your Account </p>
          <form onSubmit={handleSubmit} className="form-data">
            <label htmlFor="firstName">First Name </label>
            <input
              onChange={handleChange}
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your FirstName here.."
            />
            <label htmlFor="lastName">Last Name </label>
            <input
              onChange={handleChange}
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your lastName here..."
            />
            <label htmlFor="E-maiil">E-mail</label>
            <input
              onChange={handleChange}
              type="text"
              id="E-mail"
              name="email"
              placeholder="Enter your E-mail here..."
            />
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password ..."
            />
            <button style={{color:"white"}}>SignUp</button>
          </form>

          <div className="links">
            If you Already have an Account ,<Link to="/login">Login </Link>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};
