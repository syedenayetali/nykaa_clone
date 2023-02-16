import React from "react";
import "./heroImage.scss";
import heroImage from "../../asset/image/heroImage.png";
import sliderImg from "../../asset/image/sliderImages.png";
import sliderImage1 from "../../asset/image/couponTag1.png";
import sliderImage2 from "../../asset/image/couponTag2.png";
import dealOfTheDay from "../../asset/image/dealOfTheDay.png";

const HeroImage = () => {
  return (
    <div className="container">
      <div className="heroImageDiv container">
        <img src={heroImage} alt="heroImage" className="heroImage" />
      </div>
      <div className="sliderImages">
        <div className="sliderImgDiv container">
          <div className="singleSlideItem">
            <img src={sliderImg} alt="sliderImg" className=" sliderImg" />
            <div className="sliderName">Slash & Save</div>
          </div>
          <div className="singleSlideItem">
            <img src={sliderImg} alt="sliderImg" className=" sliderImg" />
            <div className="sliderName">Slash & Save</div>
          </div>
          <div className="singleSlideItem">
            <img src={sliderImg} alt="sliderImg" className=" sliderImg" />
            <div className="sliderName">Slash & Save</div>
          </div>
          <div className="singleSlideItem">
            <img src={sliderImg} alt="sliderImg" className=" sliderImg" />
            <div className="sliderName">Slash & Save</div>
          </div>
          <div className="singleSlideItem">
            <img src={sliderImg} alt="sliderImg" className=" sliderImg" />
            <div className="sliderName">Slash & Save</div>
          </div>
          <div className="singleSlideItem">
            <img src={sliderImg} alt="sliderImg" className=" sliderImg" />
            <div className="sliderName">Slash & Save</div>
          </div>
          <div className="singleSlideItem">
            <img src={sliderImg} alt="sliderImg" className=" sliderImg" />
            <div className="sliderName">Slash & Save</div>
          </div>
          <div className="singleSlideItem">
            <img src={sliderImg} alt="sliderImg" className=" sliderImg" />
            <div className="sliderName">Slash & Save</div>
          </div>
          <div className="singleSlideItem">
            <img src={sliderImg} alt="sliderImg" className=" sliderImg" />
            <div className="sliderName">Slash & Save</div>
          </div>
        </div>
      </div>
      <div className="sliderImages container">
        <div className="sliderImgDiv">
          <div className="singleSlideItem">
            <img src={sliderImage1} alt="sliderImg" className=" sliderImg" />
          </div>
          <div className="singleSlideItem">
            <img src={sliderImage2} alt="sliderImg" className=" sliderImg" />
          </div>
        </div>
      </div>
      <img src={dealOfTheDay} alt="dealOfTheDay" className="dealOfTheDay" />
    </div>
  );
};
export default HeroImage;
