import React from "react";

export default ({ src, width = 16, height = 16 }) => {
  const url = `${src}`;
  return (
    <div className={`titulo}`}
      style={{
        paddingTop: `calc(${height} / ${width} * 100%)`,
        margin: "var(--baseline) 0 var(--baseline) 0",
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    </div>
  );
}
