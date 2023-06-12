import React from "react";
import Vector from "../assets/Vector.png";

const Features = () => {
  return (
    <div className="container">
      <div className="textdiv" style={{ textAlign: "center" }}>
        <p
          style={{
            fontSize: "1.1rem",
            marginTop: "0px",
            marginBottom: "0px",
            fontWeight: "600",
          }}
        >
          Features
        </p>
        <h1>
          Lorem Ipsum <span className="greenColor">Adipiscing Elit</span>
        </h1>
        <p className="dimparas">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget quam
          fusce ac risus, proin amet. Porttitor id nulla in sit nec, proin eu
          eget non. Sit ac nec quis nullam sed interdum. Elementum sem ultrices
          erat vestibulum sed pulvinar placerat nec eu.
        </p>
      </div>
      <div className="Gridtemp">
        <div className="gridcol1">
          <div className="gridcol1imgdiv">
            <img src={Vector} alt="" style={{ opacity: "100%" }} />
          </div>
          <p className="para1">Lorem Ipsum Adipsicing Elit Sit</p>
          <p className="para2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et facilisi
            port.
          </p>
          <p className="para3">More Details</p>
        </div>
        <div className="gridcol">
          <div className="imgdiv">
            {" "}
            <img src={Vector} alt="" className="gridcol1img" />
          </div>
          <p className="para1">Lorem Ipsum Adipsicing Elit Sit</p>
          <p className="para2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et facilisi
            port.
          </p>
          <p className="para3">More Details</p>
        </div>
        <div className="gridcol">
          <div className="imgdiv">
            {" "}
            <img src={Vector} alt="" className="gridcol1img" />
          </div>
          <p className="para1"> Lorem Ipsum Adipsicing Elit Sit</p>
          <p className="para2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et facilisi
            port.
          </p>
          <p className="para3">More Details</p>
        </div>
        <div className="gridcol">
          <div className="imgdiv">
            {" "}
            <img src={Vector} alt="" className="gridcol1img" />
          </div>
          <p className="para1">Lorem Ipsum Adipsicing Elit Sit</p>
          <p className="para2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et facilisi
            port.
          </p>
          <p className="para3">More Details</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
