import React from "react";
import logo from "../../asset/image/nykaaLogo.png";
import "./navbar.scss";
// import { HiOutlineShoppingBag } from "react-icons/hi";
// import saleTag from "../../asset/image/saleTag.png";

const Navbar = () => {
  return (
    <div id="navbar container">
      <div id="navbar" className="navbarDiv container">
        <div className="logoAndNavItem">
          <div className="logoAndNav">
            <img src={logo} alt="logo" className="logo" />
            {/* <div className="navItem">Categories</div>
            <div className="navItem">Brands</div>
            <div className="navItem">Luxe</div>
            <div className="navItem">Nykaa Fashion</div>
            <div className="navItem">Beauty Advice</div> */}
          </div>
          {/* <div className="searchSigninCart">
            <input className="inputBox" type="text" />
            <button className="signInBtn">Sign in</button>
            <HiOutlineShoppingBag className="cartIcon" />
          </div> */}
        </div>
      </div>
      {/* <div className="navbarSecondDiv container">
        <div className="secondNav">
          <div className="secondNavItem">Makeup</div>
          <div className="secondNavItem">Skin</div>
          <div className="secondNavItem">Hair</div>
          <div className="secondNavItem">Appliances</div>
          <div className="secondNavItem">Bath & Body</div>
          <div className="secondNavItem">Natural</div>
          <div className="secondNavItem">Mom & Baby</div>
          <div className="secondNavItem">Health & Wellness</div>
          <div className="secondNavItem">Men</div>
          <div className="secondNavItem">Fragrance</div>
          <div className="secondNavItem">Pop Ups</div>
          <img src={saleTag} alt="saleTag" className="saleTag" />
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
