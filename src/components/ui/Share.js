import React, { useState } from "react";
import "../ui_styles/share.css";
import { useSpring, animated } from "react-spring";
// Sound imports
import useSound from "use-sound";
import shareSound from "../sound/burguer.mp3";
import { volume } from "../sound/volume";

const Share = () => {
  const [on, toggle] = useState(false);

  const animation = useSpring({
    width: on ? "180px" : "32px",
    height: on ? "90px" : "34px",
    opacity: on ? 1 : 0,
    config: { mass: 1, tension: 120, friction: 14 },
  });

  const [playShare] = useSound(shareSound, { volume });


  return (
    <>
      <div className="share-wrapper">
        <div className="share-square"></div>
      </div>

      <animated.div
        onClick={() => {
          toggle(!on);
          playShare();
        }}
        className="modal"
        style={{
          ...animation,
        }}
      >
        <div className="modalContent">
          <div className="name">
            <h1
              style={{
                fontSize: "1.2em",
                lineHeight: "1.2em",
                letterSpacing: "0.02em",
              }}
            >
              Comparte
            </h1>
          </div>

          <div className="social"></div>
        </div>
      </animated.div>
    </>
  );
};

export default Share;
