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
        }}
      >

        <div class="star comet"></div>

        <img className="rotate"
          style={{
            position: "absolute",
            top: `${windowHeight * 2 - 60}px`,
            left: `${bounds.width / 2 - 90}px`,
            zIndex: 0,
            transform: `translate(0, ${bounds.top / 2}px) scaleX(-1)`,
            transformOrigin: "50% 50%"
          }}
          src="./img/2/fondos/satellite3.svg"
          width="120px"
          alt=""
        />

        <img
          style={{
            position: "absolute",
            top: 0,
            left: `${bounds.width / 2 + 120}px`,
            bottom: 0,
            transform: `translate(0, ${bounds.top / 5}px)`,
            zIndex: 3,
          }}
          src="./img/2/fondos/satellite4.svg"
          width="120px"
          alt=""
        />

        <Altura index={index} bounds={bounds} data={data} />

        <FullSvg bounds={bounds} windowHeight={windowHeight} />
      </div>
    </>
  );
};
