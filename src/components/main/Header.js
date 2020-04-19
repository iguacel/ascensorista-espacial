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
              background: "#493745",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "1.5em",
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
          style={{ fontSize: "0.8em", width: "120px", marginLeft: "auto", paddingTop: ".5em", background: "gold" }}
        >
          face - twitter - whatsapp - telegram
        </div>
      </header>
    </>
  );
};
