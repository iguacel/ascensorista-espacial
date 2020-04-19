import React from "react";
import { Link } from "react-router-dom";
import useSound from "use-sound";

import clickSound from "./sound/click.mp3";
import { volume } from "./sound/volume";

import index from "../exp/index.js";

import Footer from "./main/Footer";
import Header from "./main/Header";
import Image from "./main/Image";

import "./main/style.css";

export default () => {
  return (
    <>
      <div
        className="main"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          marginTop: "-1em",
          padding: "1em",
        }}
      >
        <Header index={index} />

        {/* Destacados */}
        <div className="flex" style={{}}>
          {Object.entries(index)
            .reverse()
            .filter(([_, value]) => value.destacado)
            .map(([key, value]) => {
              return <Destacado key={key} data={value} />;
            })}
        </div>

        {/* Previas */}
        <div
          className="flex"
          style={{
            flexWrap: "wrap",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {Object.entries(index)
            .reverse()
            .filter(([_, value]) => !value.destacado)
            .map(([key, value], i) => {
              return <Previa key={key} data={value} ultimo={i === 0} />;
            })}
        </div>

        <Footer />
      </div>
    </>
  );
};

const Previa = ({ data, ultimo }) => {
  const [playClick] = useSound(clickSound, { volume });

  return (
    <div
      className="main"
      style={{
        borderTop: "1px solid var(--gray)",
        flexBasis: "49%",
        marginBottom: "1.5em",
        position: "relative",
      }}
    >
      <Link
        style={{ textDecoration: "none" }}
        onClick={() => {
          playClick();
        }}
        to={`/exp/${data.index}`}
      >
        <Image data={data} />

        <p
          style={{
            marginTop: "0.2em",
            maxWidth: "90%",
            fontWeight: "700",
            marginBottom: "var(--baseline)",
            lineHeight: "1.2em",
          }}
        >
          {data.title}
        </p>

        <h5
          style={{
            display: "block",
            position: "absolute",
            top: "var(--baseline)",
            right: "0",
            margin: "0",
            padding: "0 .5em",
            textTransform: "uppercase",
            background: "var(--yellow)",
            fontSize: "0.8em",
            letterSpacing: "0.1em",
          }}
        >
          {ultimo ? "Último" : ""}
        </h5>
      </Link>
    </div>
  );
};

const Destacado = ({ data }) => {
  const [playClick] = useSound(clickSound, { volume });

  return (
    <div
      style={{
        borderTop: "1px solid var(--gray)",
        flexBasis: "49%",
        marginBottom: "2em",
      }}
    >
      <Link
        style={{ textDecoration: "none" }}
        onClick={() => {
          playClick();
        }}
        to={`/exp/${data.index}`}
      >
        <Image data={data} large={true} />

        <h1 className="h2" style={{ marginTop: "0.2em", maxWidth: "90%" }}>
          {data.title}
        </h1>
      </Link>
    </div>
  );
};
