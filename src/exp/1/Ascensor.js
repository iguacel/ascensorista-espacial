import React from "react";
const isSafari = window.safari !== undefined;

function Ascensor({ data, index, windowHeight }) {
  return (
    <>
      <div style={{ display: "none" }}>
        <img
          src={`./img/1/ascensor/0.png`}
        />
        <img
          src={`./img/1/ascensor/1.png`}
        />
        <img
          src={`./img/1/ascensor/2.png`}
        />
        <img
          src={`./img/1/ascensor/3.png`}
        />
        <img
          src={`./img/1/ascensor/4.png`}
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
          // border: "1px solid gold",
        }}
      >
        <div className="ascensor" style={{ position: "relative" }}>
          <img
            src={`./img/1/ascensor/${data[index].index}.png`}
            alt=""
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </>
  );
}

export default Ascensor;
