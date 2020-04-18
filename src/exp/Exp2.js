import React, { Fragment, useState } from "react";
import { useWindowHeight } from "@react-hook/window-size/throttled";

import WayPoint from "./2/WayPoint";
import Ascensor from "./2/Ascensor";
import Fondos from "./2/Fondos";
import data from "./2/data";
import "./2/style.css";

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
            background: "black",
            background:
              "linear-gradient(to bottom, RGBA(37, 50, 55, 1.00) 0%,RGBA(64, 81, 167, 1.00) 68%,#84c9d6 87%,#f4d0a6 100%)",
          }}
        >

          {/* Fondo estrellas */}
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

            <img
              src="./img/1/luna.png"
              alt="Luna"
              style={{ width: "100%", margin: "1em 0 0 0" }}
            />
          </div>

          <div
            style={{
              color: "white",
              maxWidth: "450px",
              margin: "0 auto",
              padding: "2em 1em 2em 1em",
            }}
          >
            <p>Durante estos años he visto de todo...</p>

          </div>

          <Ascensor data={data[index]} windowHeight={height} />

          <div className="parallax" style={{ position: "relative" }}>
            <Fondos index={index} data={data} />
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
          className="final"
          style={{
            color: "white",
            position: "relative",
            background: "RGBA(243, 208, 166, 1.00)",
          }}
        >
          <div
            className="texto"
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              padding: "2em 0 8em 0",
              textAlign: "center",
              color: "var(--foreground-color)",
            }}
          >
            <h3>Estación Caleta</h3>
            <p>Final del trayecto</p>
          </div>
        </div>
      </div>
    </div>
  );
}
