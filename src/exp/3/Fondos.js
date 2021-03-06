import React from "react";
import useMeasure from "react-use-measure";
import { ResizeObserver } from "@juggle/resize-observer";

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

        {/* <img
          style={{
            position: "absolute",
            top: `${windowHeight * 1.6}px`,
            left: `${bounds.width / 2 - 350}px`,
            transform: `translate(0, ${bounds.top / 2}px)`,
            transformOrigin: "50% 50%",
            zIndex: 2
          }}
          src="./img/comun/fondos/dog.png"
          width="225px"
          height="225px"
          alt=""
        /> */}

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
          }}
          src="./img/comun/fondos/satellite.png"
          width="260px"
          height="260px"
          alt=""
        />

        {/* NUBES */}

        <img
          style={{
            position: "absolute",
            top: `${windowHeight * 5.4}px`,
            left: `${bounds.width / 3 - 260}px`,
            bottom: 0,
            zIndex: 0,
            transform: `translate(0, ${bounds.top / 2}px)`,
            transformOrigin: "50% 50%",
          }}
          src="./img/comun/fondos/nube.png"
          width="700px"
          height="200px"
          alt=""
        />

        {/* NUBES */}

        <img
          style={{
            position: "absolute",
            top: `${windowHeight * 4.4}px`,
            left: `${bounds.width / 3 - 20}px`,
            bottom: 0,
            zIndex: 0,
            transform: `translate(0, ${bounds.top / 2}px)`,
            transformOrigin: "50% 50%",
          }}
          src="./img/comun/fondos/nube1.png"
          width="600px"
          height="124px"
          alt=""
        />


        <img
          style={{
            position: "absolute",
            top: `${windowHeight * 3.2}px`,
            left: `${bounds.width / 3 - 160}px`,
            bottom: 0,
            zIndex: 0,
            transform: `translate(0, ${bounds.top / 2}px)`,
            transformOrigin: "50% 50%",
          }}
          src="./img/comun/fondos/nube4.png"
          width="201px"
          height="85px"
          alt=""
        />

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
