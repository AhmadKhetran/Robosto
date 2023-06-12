import React from "react";
import profilepic from "../assets/profilepic.jpg";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div
      className="container"
      style={{ textAlign: "center", marginTop: "10%", marginBottom: "10%" }}
    >
      <div>
        <p>Testimonial</p>
        <h1>
          What Our Happy <span className="greenColor">Client Say</span>
        </h1>
        <p className="parach">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget quam
          fusce ac risus, proin amet. Porttitor id nulla in sit nec, proin eu
          eget non. Sit ac nec quis nullam sed interdum. Elementum sem ultrices
          erat vestibulum sed pulvinar placerat nec eu.
        </p>
      </div>
      <div className="cusreview">
        <div>
          <div className="cusmaindiv">
            <img src={profilepic} alt="" className="profileimg" />
            <h4 style={{ marginTop: "10px" }}>Hannah Schmitt</h4>
            <p className="parach">Lead Desinger</p>
            <p className="parach">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
              Faucibus venenatis felis id augue sit cursus pellentesque enim
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
              Faucibus venenatis felis id augue sit cursus pellentesque enim{" "}
            </p>
            <FaStar style={{ color: "gold", width: "25px" }} />
            <FaStar style={{ color: "gold", width: "25px" }} />
            <FaStar style={{ color: "gold", width: "25px" }} />
            <FaStar style={{ color: "gold", width: "25px" }} />
            <FaStar style={{ color: "gold", width: "25px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
