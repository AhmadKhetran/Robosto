import React from "react";
import tabletandphone from "../assets/tabletandphone.png";

const About = () => {
  return (
    <div
      style={{
        backgroundColor: "#F2FCF9",
        marginTop: "10%",
        height: "auto",
        padding: "20px",
      }}
    >
      <div className="container">
        <div className="aboutGrid">
          <div>
            <p>About App</p>
            <h1>Lorem Ipsum Dolor Sit </h1>
            <h1 className="greenColor">Adipiscing Elit.</h1>
            <p className="parach">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget quam
              fusce ac risus, proin amet. Porttitor id nulla in sit nec, proin
              eu eget non. Sit ac nec quis nullam sed interdum. Elementum sem
              ultrices erat vestibulum sed pulvinar placerat nec eu. Dignissim
              cras integer dictum ullamcorper velit augue risus odio. Sociis ac
              commodo augue pharetra, libero vestibulum amet, nunc tristique.
              Lobortis nunc non in risus ut massa, est sapien. Velit lectus leo
              sed amet nibh.
            </p>
            <br />
            <button className="Login-Button">Learn More</button>
          </div>
          <div>
            <img
              src={tabletandphone}
              alt=""
              style={{ width: "100%", marginLeft: "30px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
