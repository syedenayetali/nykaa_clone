import React from "react";
import { Link } from "react-router-dom";
// import banner from "../../asset/image/banner.png";
import "./header.scss";

const Header = () => {
  return (
    <>
      <>
        <Link to="/">
          <h6>Home</h6>
        </Link>
        <Link to="/products">
          <h6>Products</h6>
        </Link>
      </>
      <div className="bannerDiv">
        <div className="offerHearderDiv container">
          <div className="offerDiv ">
            NYKAA PINK LOVE SALE IS LIVE NOW! UP TO 50% OFF
          </div>
          <div className="headerNav">
            <div>Get App</div>
            <div className="specialChar">|</div>
            <div>Store & Event</div>
            <div className="specialChar">|</div>
            <div>Gift Card</div>
            <div className="specialChar">|</div>
            <div>Help</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
