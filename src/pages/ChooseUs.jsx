import React from "react";
import LAPTOPCOVER from "../assets/LAPTOPCOVER.png";
import VECTOR from "../assets/Vector.png";

const ChooseUs = () => {
  return (
    <div className="container">
      <div className="choosgrid">
        <div>
          <div className="chimg">
            <img src={LAPTOPCOVER} alt="" style={{ width: "100%" }} />
          </div>
        </div>
        <div style={{ marginLeft: "7%" }}>
          <p style={{ marginBottom: "0px", fontSize: "1.2rem" }}>
            Why Choose Us
          </p>
          <h1>
            Lorem Ipsum Dolor Sit
            <br />
            <span className="greenColor">Adipiscing Elit.</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget quam
            fusce ac risus, proin amet. Porttitor id nulla in sit nec, proin eu
            eget non. Sit ac nec quis nullam sed interdum.{" "}
          </p>
          <div className="innergrid">
            <div className="customser">
              <div className="vecimg">
                <img className="vecimgin" src={VECTOR} alt="" />
              </div>
              <div>
                <h4 className="headch">Customer Service</h4>
                <p className="parach">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  quam fusce ac risus, proin amet
                </p>
              </div>
            </div>
            <div className="customser">
              <div className="vecimg">
                <img className="vecimgin" src={VECTOR} alt="" />
              </div>
              <div>
                <h4 className="headch">Customer Service</h4>
                <p className="parach">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  quam fusce ac risus, proin amet
                </p>
              </div>
            </div>
            <div className="customser">
              <div className="vecimg">
                <img className="vecimgin" src={VECTOR} alt="" />
              </div>
              <div>
                <h4 className="headch">Customer Service</h4>
                <p className="parach">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  quam fusce ac risus, proin amet
                </p>
              </div>
            </div>
            <div className="customser">
              <div className="vecimg">
                <img className="vecimgin" src={VECTOR} alt="" />
              </div>
              <div>
                <h4 className="headch">Customer Service</h4>
                <p className="parach">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  quam fusce ac risus, proin amet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
