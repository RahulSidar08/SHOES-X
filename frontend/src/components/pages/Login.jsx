import React, { useState } from "react";
import "./login.css";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { handleError, handleSuccess } from "../../utils";
import { LOGIN_URL } from "../../utils";

export const Login = () => {
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
    console.log(loginInfo);
    if (!firstName || !lastName || !email || !password) {
      return handleError("All fields are mandatory");
    }

    try {
      const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const result = await response.json();
      let { success, message, token, error, user } = result;
      console.log(token)
      if (success) {
        localStorage.setItem("jwt_token", token);
        localStorage.setItem("Current_user", user);
        handleSuccess(message);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
      console.log(result);
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <>
      <div className="cont">
        <div className="container-1">
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
              type="email"
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
            <button>Login</button>
          </form>

          <div className="links">
            If you Don't have an Account ,<Link to="/signup">SignUp</Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
