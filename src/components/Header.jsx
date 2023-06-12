import React from "react";
import { NavLink } from "react-router-dom";
import Logon from "../assets/Logon.png";
import "./main.css";

const Header = () => {
  return (
    <div>
      <div className="container header">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img src={Logon} alt="" />
            </NavLink>

            <div>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/features"
                    >
                      Features
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/chooseus"
                    >
                      ChooseUs
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/testimonial"
                    >
                      Testimonial
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <button className="Login-Button">Login</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
