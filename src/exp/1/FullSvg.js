import React, { useMemo } from "react";
import { randomInt } from "../../utils/utils";

const randomStars = (width, height, n = 0) => {
  return new Array(n).fill().map((_, i) => {
    return (
      <circle
        className="flicker"
        key={`star${i}`}
        cx={randomInt(0, width)}
        cy={randomInt(0, height)}
        r={randomInt(2, 4)}
        style={{
          animationDelay: `${randomInt(0, 1200)}ms`,
          animationDuration: `${randomInt(1, 20)}s`,
        }}
      />
    );
  });
};

function FullSvg({ bounds, windowHeight }) {
  const stars = useMemo(
    () => randomStars(bounds.width, 2000, Math.floor(bounds.width / 4)),
    [bounds.width, windowHeight]
  );

  const margin = 140;
  const start = bounds.height / 6.33;
  const colors = {
    gris: "#D9DADA",
    dark: "#9F9F9E"
  };

  return (
    <div className="svg" style={{ width: "100%", height: "100%" }}>
      <svg
        style={{ overflow: "hidden" }}
        viewBox={`0 0 ${bounds.width} ${bounds.height}`}
      >
        {stars}



        {/* SHADOW */}
        <line
          x1={bounds.width / 2 + margin + 5}
          y1={start}
          x2={bounds.width / 2 + margin + 5}
          y2={bounds.height - 300}
          style={{ strokeWidth: 12 }}
          stroke={colors.dark}
        />

        <line
          x1={bounds.width / 2 - margin + 5}
          y1={start}
          x2={bounds.width / 2 - margin + 5}
          y2={bounds.height - 300}
          style={{
            strokeWidth: 12,
          }}
          stroke={colors.dark}
        />

        {/* CLARO */}
        <line
          x1={bounds.width / 2 + margin}
          y1={start}
          x2={bounds.width / 2 + margin}
          y2={bounds.height - 300}
          style={{ strokeWidth: 12 }}
          stroke={colors.gris}
        />

        <line
          x1={bounds.width / 2 - margin}
          y1={start}
          x2={bounds.width / 2 - margin}
          y2={bounds.height - 300}
          style={{
            strokeWidth: 12,
          }}
          stroke={colors.gris}
        />


        {/* TOP */}
        <line
          x1={0}
          y1={start}
          x2={bounds.width}
          y2={start}
          style={{
            strokeWidth: 12,
          }}
          stroke={colors.gris}
        />

      </svg>
    </div>
  );
}

export default FullSvg;
