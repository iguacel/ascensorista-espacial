import React from "react";
import { useMeasure } from "react-use";

export default function () {
  const [ref, { width, height }] = useMeasure();

  return (
    <div
      className="comic"
      ref={ref}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "column",
        zIndex: 2,
        maxWidth: "900px",
        margin: "0 auto",
        marginTop: "90px",
      }}
    >
      <h1>Ascensorista 4</h1>
      <p>
        width: {width} px, height: {height} px
      </p>
    </div>
  );
}
