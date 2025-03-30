import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, quas? Pariatur enim consectetur qui ad ipsa, illum inventore consequuntur iusto unde eos at sed vitae. Iure, error. Quis quod dolores optio numquam aut harum architecto assumenda unde voluptates consectetur vel asperiores laudantium laborum, magni sed earum. Nemo aut sit ab?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li> +234-701-2345-678</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">
        Copyright 2025 &#169; Tomato.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
