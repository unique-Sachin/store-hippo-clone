import React from "react";
import "../styles/Hero.scss";
import Navbar from "./Navbar";
import ButtonPrimary from "./ui/Button";

const Hero = () => {
  return (
    <header>
      <div className="header__left">
        <Navbar />
        <div className="hero__main">
          <div className="hero__main_left">
            <h1>Leading Enterprise Ecommerce Platform in India</h1>
            <h2>Build whitelabelled</h2>
                      <h3>Designed for diverse B2B and B2C business models</h3>
                      <ButtonPrimary>schedule a demo</ButtonPrimary>
          </div>
          <div className="hero__main__right">
            <img
              src="/assets/images/ecommerce-banner.avif"
              alt="ecommerce-banner"
            />
          </div>
        </div>
      </div>
      <div className="header__right"></div>
    </header>
  );
};

export default Hero;
