import React, { useRef, useEffect } from "react";
import background from "../../assets/background.jpg";
import "./Landing.css";

const Landing = ({ timeline }) => {
  let image = useRef(null);
  let content = useRef(null);
  let contentp = useRef(null);

  useEffect(() => {
    timeline.to(image, {
      delay: 1,
      duration: 2,
      y: "-45%",
      x: "-50%",
      opacity: 1,
    });
  });

  return (
    <div>
      <div className="content" ref={(el) => (content = el)}>
        <h1>Shop Now!</h1>
        <p ref={(el) => (contentp = el)}>New Arrivals!</p>
      </div>
      <img
        src={background}
        alt=""
        className="background"
        ref={(el) => (image = el)}
      />
    </div>
  );
};

export default Landing;
