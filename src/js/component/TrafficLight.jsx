import React, { useState } from "react";


const TrafficLight = () => {
  const [currentColor, setCurrentColor] = useState("");

  return (
    <div className="center">
      <div className="top"></div>
      <div className="container">
        <div
          onClick={() => setCurrentColor("red")}
          className={`circle one ${currentColor === "red" ? "effect" : ""}`}
        ></div>
        <div
          onClick={() => setCurrentColor("yellow")}
          className={`circle two ${currentColor === "yellow" ? "effect" : ""}`}
        ></div>
        <div
          className={`circle three ${currentColor === "green" ? "effect" : ""}`}
          onClick={() => setCurrentColor("green")}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;
