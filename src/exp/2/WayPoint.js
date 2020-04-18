import React from "react";
import { Waypoint } from "react-waypoint";

export default function ({ onEnter, data, windowHeight }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: `${windowHeight}px`,
        maxWidth: "900px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid green",
        // background: `url(./img/2/bg/${data.index}.png)`,
        backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // border: "1px solid pink"
      }}
    >
      <Waypoint
        onPositionChange={() => data && data.index && data.index}
        onEnter={() => onEnter(data.index)}
        topOffset="50%"
      />
      <div
        style={{
          position: "relative",
          width: "100%",
          height: `${windowHeight}px`,
          maxWidth: "600px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid red",
          zIndex: "2",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "100%",
            height: `${windowHeight}px`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid red",
            zIndex: "2",
          }}
        >
          <img
            src={`./img/2/fg/${data.index}.png`}
            alt=""
            style={{ width: "100%", top: "0", left: "0" }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "100%",
            height: `${windowHeight}px`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid red",
            zIndex: "2",
          }}
        >
          <p className="floating"
            style={{
              zIndex: 3,
              margin: "0 60px 0 60px",
              background: "RGBA(255, 255, 255, 0.90)",
              padding: "1em",
              border: "1px solid var(--foreground-color)",
            }}
          >
            {data.texto}
          </p>
        </div>
      </div>
    </div>
  );
}
