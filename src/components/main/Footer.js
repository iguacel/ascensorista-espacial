import React from "react";
import Follow from "./Follow";

export default () => {
  return (
    <div className="footer">
      <Follow />
      <div
        style={{
          borderTop: "1px solid var(--gray)",
          margin: "1em 0 1em 0",
          padding: "1em 0 1em 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h6 style={{ fontWeight: 700, fontSize: "0.9em" }}>
          El ascensorista espacial
      </h6>

        <h6 style={{ fontWeight: 400, fontSize: "0.85em", letterSpacing: "0.05em" }}>
          <a
            href="https://calvichis.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CALVICHIS © {new Date().getUTCFullYear()}
          </a>{" "}
        </h6>
      </div>

    </div>
  );
}
