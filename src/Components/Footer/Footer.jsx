import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left */}
        <div className="flexStart f-left">
          <img src="/public/logo2.png" alt="" />
          <span className="secondary">
            Our vision is to make all people the best place to live for them.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
