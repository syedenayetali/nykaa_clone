import React from "react";
import banner from "../../asset/image/banner.png";
import "./header.scss";

const Header = () => {
  return (
    <>
      <div className="bannerDiv">
        <div className="offerHearderDiv">
          <div className="offerDiv">
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
