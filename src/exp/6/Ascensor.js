import React from "react";
const isSafari = window.safari !== undefined;

function Ascensor({ data, index, windowHeight }) {
  return (
    <>
      <div style={{ display: "none" }}>
        <img
          src={`./img/6/ascensor/0.png`} alt=""
        />
        <img
          src={`./img/6/ascensor/1.png`} alt=""
        />
      </div>
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
        }}
      >
        <div className="ascensor" style={{ position: "relative" }}>
          <img
            src={`./img/6/ascensor/${data[index].index <= 3 ? 0 : 1}.png`}
            alt=""
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </>
  );
}

export default Ascensor;
