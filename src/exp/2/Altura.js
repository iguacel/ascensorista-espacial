import React from "react";
import { useSpring, animated } from "react-spring";
import { normalizeBetweenTwoRanges } from "../../utils/utils";

function Altura({ bounds, index, data }) {
  let visible = index > 0 && index < data[data.length - 1].index;

  const { opacity } = useSpring({
    opacity: visible ? 1 : 0,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <animated.div
      className="altura"
      style={{
        position: "fixed",
        top: "90px",
        width: "100%",
        zIndex: 4,
        opacity,
      }}
    >
      <div
        style={{
          width: "200px",
          textAlign: "center",
          margin: "0 auto",
          color: "white",
          background: "var(--foreground-color)",
          padding: "1em",
          border: "1px solid white",
          display: "flex",
          fontSize: "0.9em"
        }}
      >
        <h6 style={{ opacity: 0.6 }}>Altura: </h6>

        <h6
          style={{
            fontWeight: 400,
            fontFeatureSettings: '"tnum"',
            fontVariantNumeric: "tabular-nums",
            width: "190px",
            letterSpacing: "0.09em",
          }}
        >
          {Math.floor(
            normalizeBetweenTwoRanges(
              bounds.height - Math.abs(bounds.top),
              0,
              bounds.height,
              0,
              350000
            )
          ).toLocaleString()}{" "}
        </h6>

        <h6 style={{ opacity: 0.6 }}>km.</h6>
      </div>
    </animated.div>
  );
}

export default Altura;
