import React from "react";
import segment from "../assets/segment.png";
import samsum from "../assets/samsum.png";
import oracle from "../assets/oracle.png";
import pronet from "../assets/pronet.png";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaVimeo } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-content">
      <div className="container">
        <div className="logogrid">
          <div style={{ margin: "auto" }}>
            <img style={{ width: "60%" }} src={segment} alt="" />
          </div>
          <div>
            <img style={{ width: "60%" }} src={samsum} alt="" />
          </div>
          <div>
            <img style={{ width: "60%" }} src={pronet} alt="" />
          </div>
          <div>
            <img style={{ width: "60%" }} src={oracle} alt="" />
          </div>
          <div>
            <img style={{ width: "60%" }} src={segment} alt="" />
          </div>
          <div>
            <img style={{ width: "60%" }} src={samsum} alt="" />
          </div>
        </div>
        <div className="midboxfo">
          <div className="midboxgr">
            <div>
              <h3 style={{ color: "white" }}>Subscribe Newsletters</h3>
            </div>
            <div>
              <input
                type="text"
                className="inputField"
                placeholder="Your Email Address"
              />
            </div>
          </div>
        </div>
        <div className="botomgrid">
          <div className="logo">
            <img src={Logo} style={{ width: "30%", marginLeft: "2%" }} />
          </div>
          <div className="navlink">
            <ul className="navlinkul">
              <li className="navlinkli">
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    opacity: "50%",
                    fontSize: "0.7rem",
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="navlinkli">
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    opacity: "50%",
                    fontSize: "0.7rem",
                  }}
                >
                  About
                </Link>
              </li>
              <li className="navlinkli">
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    opacity: "50%",
                    fontSize: "0.7rem",
                  }}
                >
                  Features
                </Link>
              </li>
              <li className="navlinkli">
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    opacity: "50%",
                    fontSize: "0.7rem",
                  }}
                >
                  {" "}
                  Testimonial
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="socialicons">
              <div>
                <FaFacebook className="iconbo" />
              </div>
              <div>
                <FaTwitter className="iconbo" />
              </div>
              <div>
                <FaVimeo className="iconbo" />
              </div>
              <div>
                <FaYoutube className="iconbo" />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="gridlast">
          <p>© 2019 Lift Media. All rights reserved.</p>
          <div>
            <p style={{ float: "right" }}>
              <Link style={{ textDecoration: "none", color: "black" }}>
                Terms of Service
              </Link>{" "}
              <Link style={{ textDecoration: "none", color: "black" }}>
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
