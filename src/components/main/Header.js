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
            width: "100%",
          }}
        >
          <div
            className="logo"
            style={{
              width: "160px",
              height: "160px",
              background: "#493745",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "1em 1em 1em 1em",
            }}
          >
            <Logo />
            <p style={{ color: "white", fontSize: "2em", fontWeight: 700 }}>
              # 1
            </p>
          </div>
        </div>


        <div
          className="sharer"
          style={{ width: "50%", marginLeft: "auto", paddingTop: ".5em" }}
        >
          <h6 style={{
            fontWeight: 400, letterSpacing: "0.05em", fontSize: "0.65em",
          }}>
            COMPARTE
        </h6>
        Face - twitter - whatsapp - telegram
        </div>
      </header>
    </>
  );
};
