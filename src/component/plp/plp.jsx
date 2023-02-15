import React from "react";
import { useState, useEffect } from "react";
import "./plp.scss";
import { FaRegHeart } from "react-icons/fa";

const Plp = () => {
  const [plpData, setPlpData] = useState([]);
  useEffect(() => {
    const plpList = fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setPlpData(json))
      .catch((err) => err);
  }, []);
  return (
    <>
      {plpData.length > 0 && (
        <div className="plpDiv">
          {plpData.map((e) => (
            <div className="plpItem">
              <img
                src={e.image}
                alt="plpProductImg"
                className="plpProductImg"
              />
              <div className="productName">{e.title}</div>
              <div className="mrpDiv">
                <div>{`MRP: ₹${(e.price * 82).toFixed(2)}`}</div>
                <div>{`Rating: ${e.rating.rate}⭐`}</div>
              </div>
              <div className={"wishlistDiv"}>
                <FaRegHeart className="wishlistIcon" />
                <div className="addToCart">Add To Cart</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Plp;
