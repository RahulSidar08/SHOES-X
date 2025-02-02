import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./shop.css";
export const Shop = () => {
  const [shoppingData, setShoppingData] = useState([]);
  const [page, setpage] = useState(1);
  const [startNum, setstartNum] = useState(0);
  const [endNum, setendNum] = useState(10);
  const [findToken, setFindtoken] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getShoppingData = async () => {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const result = await res.json();
      console.log(result);
      setShoppingData(result.products);
    };

    let token = localStorage.getItem("jwt_token");
    if (token) {
      setFindtoken(!findToken);
    }
    getShoppingData();
  }, []);

  console.log(shoppingData);

  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  function setPageNumber(num) {
    let st = num * 10 - 10;
    let ed = num * 10;
    setstartNum(st);
    setendNum(ed);
  }

  if(!findToken)
  {
    navigate("/login")
  }

  return (
    <>
        <div className="main">
          <div className="container">
            {shoppingData
              ?.slice(page * 10 - 10, page * 10)
              ?.map((item, idx) => {
                return (
                  <div className="box" key={idx}>
                    <div className="image">
                      <img src={item.images} alt="Shopping" />
                    </div>
                    <div className="desc">
                      <p>{item.description}</p>
                    </div>
                    <div className="title">
                      <p>{item.title}</p>
                      <p>{item.price} $</p>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="pagebutton">
            {nums?.map((item, idx) => {
              return (
                <div key={idx} className="nums">
                  <button onClick={() => setpage(idx + 1)}>{idx + 1}</button>
                </div>
              );
            })}
          </div>
        </div>
    </>
  );
};
