import React, { Fragment, useState } from "react";
import { useWindowHeight } from "@react-hook/window-size/throttled";

import useMeasure from "react-use-measure";
import { ResizeObserver } from "@juggle/resize-observer";

import Image from "./comp/Image";
import WayPoint from "./2/WayPoint";
import Ascensor from "./2/Ascensor";
import Fondos from "./2/Fondos";
import data from "./2/data";
import "./2/style.css";
export default function () {
  const [index, setIndex] = useState(0);
  const height = useWindowHeight();
  const [ref, bounds] = useMeasure({ scroll: true, polyfill: ResizeObserver });

  const onEnter = (index) => {
    setIndex(index);
  };

  return (
    <div>
      <div className="comic">
        <div
          className="comic"
          style={{
            background:
              "linear-gradient(to bottom, #03061A 0%, RGBA(64, 81, 167, 1.00) 68%, #84c9d6 87%,#f4d0a6 100%)",
          }}
        >
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              paddingTop: "20px",
              color: "white",
              position: "relative",
            }}
          >
            <div
              style={{
                color: "white",
                maxWidth: "600px",
                margin: "0 auto",
                padding: "0 1em 0 1em",
              }}
            >
              <Image src="./img/comun/titulo.png" />

              <h1
                className="h1"
                style={{
                  display: "none",
                  textAlign: "center",
                  lineHeight: "1.2em",
                }}
              >
                El ascensorista espacial
              </h1>
            </div>
          </div>
          {/* Ascensor */}
          <Ascensor windowHeight={height} bounds={bounds} />

          <div ref={ref}
            className="parallax" style={{ position: "relative" }}>

            {/* Fondos */}
            <Fondos index={index} data={data} windowHeight={height} bounds={bounds} />

            {/* Waypoint */}
            <div className="bg" style={{ marginTop: `-${height}px` }}>
              {data.map((x) => {
                return (
                  <Fragment key={`n${x.index}`}>
                    <WayPoint
                      onEnter={onEnter}
                      data={x}
                      windowHeight={height}
                    />
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className="suelo"
          style={{
            background: "linear-gradient(to bottom, #A0A9A4 0%, #B0A89E 100%)",
            marginTop: "-220px",
            height: "290px",
          }}
        ></div>
      </div>
    </div>
  );
}
