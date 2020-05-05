import React from "react";
import useMeasure from "react-use-measure";
import { ResizeObserver } from "@juggle/resize-observer";

import Altura from "./Altura";
import FullSvg from "./FullSvg";

export default ({ index, data, windowHeight }) => {
  const [ref, bounds] = useMeasure({ scroll: true, polyfill: ResizeObserver });

  return (
    <>
      <div
        ref={ref}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          overflow: "hidden"
        }}
      >
        <div className="star comet"></div>

        <img
          style={{
            position: "absolute",
            top: `${windowHeight * 1.3}px`,
            left: `${bounds.width / 2 - 350}px`,
            zIndex: 0,
            transform: `translate(0, ${bounds.top / 2}px)`,
            transformOrigin: "50% 50%",
            zIndex: 2
          }}
          src="./img/1/fondos/dog.png"
          width="280px"
          height="280px"
          alt=""
        />

        {/* SATELLITE */}
        <img
          style={{
            position: "absolute",
            top: `${windowHeight * 2.4}px`,
            left: `${bounds.width / 2 - 20}px`,
            bottom: 0,
            zIndex: 0,
            transform: `translate(0, ${bounds.top / 2}px)`,
            transformOrigin: "50% 50%",
            zIndex: 0
          }}
          src="./img/1/fondos/satellite.png"
          width="330px"
          height="330px"
          alt=""
        />

        <Altura index={index} bounds={bounds} data={data} />

        {/* FULLSVG */}

        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: `${bounds.width}px`,
            height: `${bounds.height}px`,
          }}
        >
          <FullSvg bounds={bounds} windowHeight={windowHeight} />
        </div>
      </div>
    </>
  );
};
