import React from "react";
import Logo from "./Logo";

export default () => {
  return (
    <>
      <header style={{ marginBottom: "0.8em" }}>
        <div
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pointerEvents: "none"
          }}
        >
          <Logo />
        </div>
        <div
          className="cabecera"
          style={{
            fontSize: "0.8em",
            marginLeft: "auto",
            paddingTop: "1.5em",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="sharer">
            <h6
              style={{
                fontWeight: 400,
                letterSpacing: "0.05em",
                fontSize: "0.8em",
                textTransform: "uppercase",
                lineHeight: "1.6em",
              }}
            >
              Webcomics de <strong>Calvichis</strong>, <strong>The Pilot Dog</strong> y otros artistas
            </h6>{" "}
          </div>
        </div>
      </header>
    </>
  );
};
