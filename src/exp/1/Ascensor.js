import React from "react";
const isSafari = window.safari !== undefined;

function Ascensor({ data, windowHeight }) {
  return (
    <div
      style={{
        width: "100%",
        height: `${windowHeight}px`,
        maxWidth: "900px",
        margin: "0 auto",
        border: "1px solid gray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: isSafari ? "-webkit-sticky" : "sticky",
        top: 0,
        zIndex: 2,
      }}
    >
      <div className="ascensor floating" style={{ position: "relative" }}>
        <h4 className="skewed">
          <span>{4 - data.index}</span>
        </h4>
        <img
          src={`./img/1/ascensor/${data.index}.png`}
          alt=""
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}

export default Ascensor;
