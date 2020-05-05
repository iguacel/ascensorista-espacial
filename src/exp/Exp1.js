import React, { Fragment, useState } from "react";
import { useWindowHeight } from "@react-hook/window-size/throttled";

import WayPoint from "./1/WayPoint";
import Ascensor from "./1/Ascensor";
import Fondos from "./1/Fondos";
import data from "./1/data";
import "./1/style.css";

export default function () {
  const [index, setIndex] = useState(0);

  const height = useWindowHeight();

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
              paddingTop: "80px",
              color: "white",
              position: "relative",
            }}
          >
            <div
              style={{
                color: "white",
                maxWidth: "450px",
                margin: "0 auto",
                padding: "0 1em 0 1em",
              }}
            >
              <h1
                className="h2"
                style={{ textAlign: "center", lineHeight: "1.2em" }}
              >
                El ascensorista espacial
              </h1>
              <p>
                Los viajes espaciales llegaron a Cádiz el 16 de julio de 2049.
              </p>
              <p style={{ marginTop: "-0.5em" }}>
                Ese día me convertí en el primer ascensorista espacial de la
                ciudad.
              </p>
            </div>
            {/*
            <img
              src="./img/1/luna.png"
              alt="Luna"
              style={{ width: "100%", margin: "1em 0 0 0" }}
            /> */}
          </div>

          {/* <div
            style={{
              color: "white",
              maxWidth: "450px",
              margin: "0 auto",
              padding: "2em 1em 2em 1em",
            }}
          >
            <p>Durante estos años he visto de todo...</p>
          </div> */}

          <Ascensor data={data} index={index} windowHeight={height} />

          <div className="parallax" style={{ position: "relative" }}>
            <Fondos index={index} data={data} windowHeight={height} />
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
            background:
              "linear-gradient(to bottom, #A0A9A4 0%, #B0A89E 100%)",
            marginTop: "-220px",
            height: "290px",
          }}
        ></div>
      </div>
    </div>
  );
}
