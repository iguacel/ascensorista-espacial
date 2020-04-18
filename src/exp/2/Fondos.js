import React, { useCallback } from 'react';
import useMeasure from "react-use-measure";
import { ResizeObserver } from "@juggle/resize-observer";

import Altura from "./Altura";

import { useSpring, animated as a, interpolate } from 'react-spring'

export default ({ index, data, windowHeight }) => {
  const [ref, bounds] = useMeasure({ scroll: true, polyfill: ResizeObserver });

  console.log(bounds);

  // const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }))

  // const interpBg = xy.interpolate((x, y) => `perspective(400px) rotateY(${x / 60}deg) rotateX(${-y / 60}deg) translate3d(-50%, -50%, 0)`)
  // const interpFace = st.interpolate(o => `translate(90,${105 + o / 4})`)
  // const interpEye = interpolate([st, xy], (o, xy) => `translate(${xy[0]},${xy[1]}) scale(0.8)`)
  // const interpIris = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 30},${xy[1] / 30 + -10 + o / 8})`)
  // const interpPupil = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 25},${xy[1] / 25 + -10 + o / 8})`)
  // const interpSpot = interpolate([st, xy], (o, xy) => `translate(${8 + -xy[0] / 80},${-xy[1] / 80 + -10 + o / 8})`)
  // const interpMouth = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 18 + 188},${xy[1] / 20 + 230 + o / 1.7}) scale(0.8)`)
  // const interpHair = st.interpolate(o => `translate(79,${o / 4})`)


  // // Move
  // const onMove = useCallback(({ clientX: x, clientY: y }) => set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }), [])
  // // Scroll
  // const onScroll = useCallback(e => set({ st: e.target.scrollTop / 30 }), [])

  return (
    <>
      <div ref={ref}
        // onMouseMove={onMove} onScroll={onScroll}
        style={{ position: "absolute", border: "10px solid pink", width: "100%", height: "100%" }}>

        <a.img style={{ position: "absolute", top: "200px", left: "20px", zIndex: 0, transform: `translate(0, ${bounds.top / 2}px)` }} src="./img/2/fondos/satellite4.svg" width="10%" alt="" />

        <a.img style={{ position: "absolute", top: 0, right: "20px", bottom: 0, zIndex: 0, transform: `translate(0, ${bounds.top / 5}px)`, zIndex: 3 }} src="./img/2/fondos/satellite4.svg" width="20%" alt="" />

        <a.img style={{ position: "absolute", top: 0, right: "20px", bottom: 0, zIndex: 0, transform: `translate(0, ${bounds.top / 2}px)`, zIndex: 0 }} src="./img/2/fondos/stars.svg" width="100%" alt="" />

        <Altura index={index} bounds={bounds} data={data} />
      </div>
    </>
  );
};

