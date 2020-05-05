import React from 'react';

const Text = ({ text }) => {
  return (
    <div
      style={{
        color: "white",
        maxWidth: "450px",
        margin: "0 auto",
        padding: "2em 1em 2em 1em",
      }}
    >
      <p>{text}</p>
    </div>
  );
};

export default Text;