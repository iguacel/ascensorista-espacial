import React, { useCallback } from 'react';
import useMeasure from "react-use-measure";
import { ResizeObserver } from "@juggle/resize-observer";

import Altura from "./Altura";
import FullSvg from "./FullSvg";

export default ({ index, data, windowHeight }) => {
  const [ref, bounds] = useMeasure({ scroll: true, polyfill: ResizeObserver });

  console.log(bounds);

  return (
    <>
      <div ref={ref}
        style={{ position: "absolute", width: "100%", height: "100%", border: "12px solid pink" }}>

        <img style={{ position: "absolute", top: "200px", left: "20px", zIndex: 0, transform: `translate(0, ${bounds.top / 2}px)` }} src="./img/2/fondos/satellite4.svg" width="10%" alt="" />

        <img style={{ position: "absolute", top: 0, right: "20px", bottom: 0, zIndex: 0, transform: `translate(0, ${bounds.top / 5}px)`, zIndex: 3 }} src="./img/2/fondos/satellite4.svg" width="20%" alt="" />

        <Altura index={index} bounds={bounds} data={data} />

        <FullSvg bounds={bounds} windowHeight={windowHeight} />

      </div>
    </>
  );
};


