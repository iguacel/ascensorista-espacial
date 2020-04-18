import React, { useMemo } from "react";
import { randomInt, random } from "../../utils/utils";

const randomStars = (width, height, n = 100) => {
  return new Array(n).fill().map((_, i) => {
    return (
      <circle className="flicker"
        key={`star${i}`}
        cx={randomInt(0, width)}
        cy={randomInt(0, height)}
        r={randomInt(2, 4)}
        fill={`RGBA(255, 255, 255, ${random(0.2, 1)}`}
        style={{ animationDelay: `${randomInt(0, 1200)}ms` }}
      />
    );
  });
};

function FullSvg({ bounds, windowHeight }) {
  const margin = 130;
  const color = "RGBA(219, 231, 229, 0.80)";

  const stars = useMemo(
    () => randomStars(bounds.width, windowHeight * 2, Math.floor(bounds.width / 4)),
    [bounds.width, windowHeight]
  );

  return (
    <div className="svg" style={{ width: "100%", height: "100%", zIndex: 0 }}>
      <svg
        style={{ margin: "0 auto", overflow: "visible" }}
        viewBox={`0 0 ${bounds.width} ${bounds.height}`}
      >
        <line
          x1={bounds.width / 2 + margin}
          y1={windowHeight - windowHeight / 8}
          x2={bounds.width / 2 + margin}
          y2={bounds.height - 300}
          style={{ stroke: color, strokeWidth: 12 }}
        />

        <line
          x1={bounds.width / 2 - margin}
          y1={windowHeight - windowHeight / 8}
          x2={bounds.width / 2 - margin}
          y2={bounds.height - 300}
          style={{ stroke: color, strokeWidth: 12 }}
        />

        {stars}
      </svg>
    </div>
  );
}

export default FullSvg;
