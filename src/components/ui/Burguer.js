import React from "react";
import { Link } from "react-router-dom";
import "../ui_styles/burguer.css";
// Sound imports
import useSound from "use-sound";
import burguerSound from "../sound/burguer.mp3";
import { volume } from "../sound/volume";

const Burguer = () => {
  const [playBurguer] = useSound(burguerSound, { volume });

  return (
    <Link
      onClick={() => {
        playBurguer();
      }}
      to={"/"}
    >
      <div
        className="burguer-wrapper"
        onClick={() => {
          playBurguer();
        }}
      >
        <div className="navSquares n1"></div>
        <div className="navSquares n2"></div>
        <div className="navSquares n3"></div>
        <div className="navSquares n4"></div>
      </div>
    </Link>
  );
};

export default Burguer;
