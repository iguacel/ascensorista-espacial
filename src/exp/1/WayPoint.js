import React from "react";
import { Waypoint } from "react-waypoint";

export default function ({ onEnter, data }) {
  return (
    <div
      className="final"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        maxWidth: "900px",
        margin: "0 auto",
        border: "1px solid gray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `url(./img/1/bg/${data.index}.png)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Waypoint
        onPositionChange={() => data && data.index && data.index}
        onEnter={() => onEnter(data.index)}
        topOffset="50%"
      />
      <p
        style={{
          position: "relative",
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
  );
}


