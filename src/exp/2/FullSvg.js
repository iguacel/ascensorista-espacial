import React from "react";



function FullSvg({ bounds, windowHeight }) {
  const margin = 130;
  const color = 'RGBA(219, 231, 229, 0.80)';

  return (
    <div className="svg" style={{ width: "100%", height: "100%", zIndex: 0 }}>
      <svg
        style={{ margin: "0 auto" }}
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
      </svg>
    </div>
  );
}

export default FullSvg;
