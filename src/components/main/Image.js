import React from "react";

export default ({ data, large, width = 16, height = 9 }) => {
  const url = `./img/thumbs/${large ? "large" : "small"}/${data.index}.jpg`;
  return (
    <div
      style={{
        paddingTop: `calc(${height} / ${width} * 100%)`,
        margin: "var(--baseline) 0 var(--baseline) 0",
        background: "var(--gray)",
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    </div>
  );
}
