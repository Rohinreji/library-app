import React from "react";
import "./footer.css";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io5";

function Footer() {
  return (
    <div>
      <footer className="commonFooter">
        <div className="commonFooter-icons fs-2">
          <IoLogoYoutube style={{ marginRight: "10px", cursor: "pointer" }} />
          <FaXTwitter style={{ marginRight: "10px", cursor: "pointer" }} />
          <FaInstagram style={{ marginRight: "10px", cursor: "pointer" }} />
          <FaFacebook style={{ marginRight: "10px", cursor: "pointer" }} />
          <IoLogoGoogle style={{ marginRight: "10px", cursor: "pointer" }} />
        </div>
        <div className="commonFooter-content mt-4">
          <p>Home</p>
          <p>About</p>
          <p>News</p>
          <p>Contact Us</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
