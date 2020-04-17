import React from "react";
import { Waypoint } from "react-waypoint";

export default function ({ onEnter, data, windowHeight }) {
  return (

    <div
      className="final"
      style={{
        position: "relative",
        width: "100%",
        height: `${windowHeight}px`,
        maxWidth: "900px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `url(./img/1/bg/${data.index}.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        border: "1px solid pink"
      }}
    >
      <Waypoint
        onPositionChange={() => data && data.index && data.index}
        onEnter={() => onEnter(data.index)}
        topOffset="50%"
      />
      {/* <p
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
      </p> */}


      {/* Foreground */}

      <div
        className="final"
        style={{
          position: "relative",
          width: "100%",
          height: `${windowHeight}px`,
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: `url(./img/1/fg/${data.index}.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          border: "1px solid pink",
          zIndex: 3
        }}
      >
        <Waypoint
          onPositionChange={() => data && data.index && data.index}
          onEnter={() => onEnter(data.index)}
          topOffset="50%"
        />

      </div>
    </div>




  );
}


