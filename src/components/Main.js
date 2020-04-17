import React from "react";
import useMeasure from "react-use-measure";
import { ResizeObserver } from "@juggle/resize-observer";
import { Link } from "react-router-dom";
import useSound from "use-sound";

import clickSound from "./sound/click.mp3";
import { volume } from "./sound/volume";

import index from "../exp/index.js";

export default () => {
  const [ref, bounds] = useMeasure({ scroll: true, polyfill: ResizeObserver });

  return (
    <>
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          marginTop: "1em",
          padding: "1em",
        }}
      >
        <Header />

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
      style={{
        borderTop: "1px solid var(--foreground-color)",
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
        <img
          src="https://picsum.photos/id/237/400/250"
          alt=""
          style={{ width: "100%" }}
        />
        <h2 className="h3" style={{ marginTop: "0.2em", maxWidth: "90%" }}>
          {data.title}
        </h2>
        <p className="small" style={{ fontWeight: 400 }}>
          {data.date}
        </p>

        <h5
          style={{
            display: "block",
            position: "absolute",
            top: "var(--baseline)",
            right: "0",
            margin: "0",
            padding: "0 .5em",
            color: "#fff",
            textTransform: "uppercase",
            background: "var(--red)"
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
        borderTop: "1px solid var(--foreground-color)",
        flexBasis: "49%",
        marginBottom: "1.5em",
      }}
    >
      <Link
        style={{ textDecoration: "none" }}
        onClick={() => {
          playClick();
        }}
        to={`/exp/${data.index}`}
      >
        <img
          src="https://picsum.photos/id/237/800/400"
          alt=""
          style={{ width: "100%" }}
        />
        <h1 className="h2" style={{ marginTop: "0.2em", maxWidth: "90%" }}>
          {data.title}
        </h1>
        <p className="small" style={{ fontWeight: 400 }}>
          {data.date}
        </p>
      </Link>
    </div>
  );
};

function Header(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "2em",
        paddingTop: "2em",
        borderTop: "2px solid var(--foreground-color)",
      }}
    >
      <a href="https://iguacel.github.io/ascensorista-espacial/"><h1>Prod</h1></a>

    </div>
  );
}

function Footer(props) {
  return (
    <div
      style={{
        borderTop: "1px solid var(--foreground-color)",
        margin: "1em 0 1em 0",
        padding: "1em 0 1em 0",
      }}
    >
      <h6>Footer</h6>
    </div>
  );
}
