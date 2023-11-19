import React, { useState } from "react";


const TrafficLight = () => {
  const [currentColor, setCurrentColor] = useState("");

  const Red =  currentColor === "red" ? "effect" : "";
  const Yellow =  currentColor === "yellow" ? "effect" : "";
  const Green =  currentColor === "green" ? "effect" : "";

  return (
    <div className="center">
      <div className="top"></div>
      <div className="container">
        <div
          onClick={() => setCurrentColor("red")}
          className={`circle one ${Red}`}
        ></div>
        <div
          onClick={() => setCurrentColor("yellow")}
          className={`circle two ${Yellow}`}
        ></div>
        <div
         onClick={() => setCurrentColor("green")}
         className={`circle three ${Green}`}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;
