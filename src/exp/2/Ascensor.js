import React from "react";
const isSafari = window.safari !== undefined;

function Ascensor({ data, windowHeight }) {
  return (
    <div
      style={{
        height: `${windowHeight}px`,
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: isSafari ? "-webkit-sticky" : "sticky",
        top: 0,
        zIndex: 2,
        border: "1px solid gold"
      }}
    >
      <div className="ascensor" style={{ position: "relative" }}>
        {/* <h4 className="skewed">
          <span>{4 - data.index}</span>
        </h4> */}
        <img
          src={`./img/2/ascensor/${data.index}.png`}
          alt=""
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}

export default Ascensor;
