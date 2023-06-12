import React from "react";
import leftpic from "../assets/leftpic.png";
import overviewpic from "../assets/overviewpic.png";
import rightpic from "../assets/rightpic.png";

const Homepage = () => {
  return (
    <>
      <div style={{ marginTop: "10%" }}>
        <div
          className="container"
          style={{
            marginTop: "2%",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "1.5rem",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            Lorem Ipsum Dolor
          </p>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            Lorem Ipsum Dolor Si
          </h1>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            Amet Consectetur
            <span style={{ color: "#00C48C" }}> Adipiscing Elit.</span>
          </h1>
        </div>

        <div className="container" style={{ textAlign: "center" }}>
          <button className="Login-Button">Sign Up</button>
          <button className="Learn-Button">Learn More</button>
        </div>

        <div className="imgcontainer">
          <div className="container">
            <div style={{ width: "100%", marginTop: "-5%" }}>
              <img src={overviewpic} style={{ width: "100%" }} />
            </div>
          </div>
        </div>
        <div className="Eclipse"></div>
      </div>
    </>
  );
};

export default Homepage;
