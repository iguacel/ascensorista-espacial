import React from "react";
import { normalizeBetweenTwoRanges } from "../../utils/utils";

const isSafari = window.safari !== undefined;

const size = { width: 900, height: 1200 };

function Ascensor({ bounds, windowHeight }) {

  const transformVertical = Math.floor(
    normalizeBetweenTwoRanges(
      bounds.height - Math.abs(bounds.top), //  val
      0, //  minVal
      bounds.height, //  maxVal
      40, //  newMin = 0
      99 //  newMax = 1
    ));


  return (
    <>
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
            src={`./img/2/ascensor/0.png`}
            alt=""
            style={{ width: "100%" }}
          />

          <img
            src={`./img/2/ascensor/solo1.png`}
            alt=""
            style={{
              height: `100%`,
              width: `100%`,
              maxWidth: "600px",
              position: "absolute",
              right: "0",
              top: "0",
              bottom: "10%",
              transform: `scale(1,0.${transformVertical})`,
              transformOrigin: "0 80%",
              willChange: `transform 200ms`,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Ascensor;
