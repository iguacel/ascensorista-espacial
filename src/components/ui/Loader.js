import React from "react";
import "../ui_styles/loader.css";

const Loader = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="loaderWrapper">
        <div className="box loader" />
        <Logo />
      </div>
    </div>
  );
};

export default Loader;

const Logo = () => {
  return (
    <div>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x={0}
        y={0}
        viewBox="0 0 566.9 566.9"
        xmlSpace="preserve"
      >
        <path
          fill="#BF5226"
          d="M450.8 48.5L440.6 39s1.3-6.6 4-10.8c2-3.2 6.4-4.8 9.7-4.9 1.1-.1 2.1 0 2.9.3 1.3.4 4.4 2.7 7.7 5.2l-14.1 19.7zm7.2 6.7s-.9 1.7-2.2 5c-1.2 3.4-2.5 8.4-2.5 8.4s-5.7-1.5-7-1.4c-1.3 0-2.1.8-2.8 3.1-.7 2.3-1.3 3.3.2 3.8 1.3.4 8.6 3 8.6 3s-.4 7.4.8 8.4c1.2 1 7.6-.3 7.6-.3l1 5.4s.8 1 1.7 1.4c1 .4 5.3-.3 6.1-1 .8-.8.9-3 .9-3l-1.7-5.9s2.3-.8 4.6-1.9c2.2-1 7.6-4.2 7.6-4.2l7.9 6.9 14-19.8c-2.5-2.6-4.8-4.8-4.8-4.8s2.5-4 4.8-7.8 2.7-7.7 2-11.9c-.7-4.3-8.1-10.2-13.9-11.3h-1.1c-6 .2-15.9 9-15.9 9s-3.3-2.8-7-5.7c-1.6 2.2-6.8 9.7-14.2 20l5.3 4.6zm46.8 9.9c-3 4.2-7.4 10.4-13.9 19.6l.4.4s5.9 5.7 10.7 5.9c4.8.2 7.9-3.2 9.5-7.5 1.5-4.2 1.3-7.3.2-10.2-.6-1.4-3.7-4.9-6.9-8.2zm7-22.3l3.3-.7-11.9-10.9.7-3-3.1.7-12.5-10.4-1.2 3 14.6 9.3 10.1 12z"
        />
        <path
          fill="#493745"
          d="M363 339.4h2l-2-5.2-4.3 3.9 3.3-.7 1 2zm-51.6-104.8c-.2-.7-.3-1.3-.3-2.1 0-3.2 2.2-5.8 5-5.8.1 0 .2-.1.3 0 .1-3.1 2.4-5.6 5-5.6.6 0 1.2.1 1.7.3.4-1.3 1.4-2.2 2.6-2.2.5 0 1 .2 1.4.4 1-3.7 2.9-5.6 6.1-6.2 3.4-.7 5.8-4 6.4-9.4.7-5.5 7.4-5.6 7.4-5.6s.3-8 6.5-8c.5-4.1 6.9-14 10-13.9.7 0 11.8-15 16.1-20.4-26.7-20.1-59.9-32-95.8-32-88 0-159.3 71.3-159.3 159.3 0 51.5 24.5 97.2 62.3 126.3.5-5.3 1.5-12 2.2-17.3 2.5.2 5.4.8 8.8 1.8 7.6 2.4 13 4.6 16.8 6.2-2.2 8.4-3.3 16.9-2 23.2.1.8.5 1.7.7 2.6 21.3 10.5 45.2 16.5 70.5 16.5 4.4 0 8.6-.2 12.9-.6l-.5-27.1-7.1-103.9s-26 8.2-61.6 11.6c-31.9 3.1-70.6-.6-78.3-1.4-2.5-30.7-5.3-57.9-8.2-72.6-2-10.1-.3-19.4 3.9-27.5 10.7-20.8 38-34.2 63.4-34.5 9.9-.1 19.5 1.8 27.7 6 15.8 8.1 27.5 22.5 35.8 40.9 3.1-2.4 12.8-9.2 14.3-2.8 1.4 6.1-6.7 11.1-10.1 12.9 2 5.5 3.8 11.2 5.3 17.1 1.6-2.3 4.1-3.8 7-3.8.2 0 .4.1.6.1v-.4c0-3.2 2.3-5.8 5-5.8.3 0 .7.1.9.1.4-2.2 1.7-3.9 3.5-4.5-.8-1-1.2-2.4-1.2-3.8 0-3.2 2.3-5.8 5-5.8 1.3 0 2.6.7 3.5 1.6.8-.9 1.8-1.4 3-1.6.1-2.1 1.3-2.2 2.8-2.3zm36.5-30c.7 2.7-6.5 6.3-6.5 6.3s-3.2 12-7.3 12.8c-3.2.5-2 8.9-4.7 9.6-2.2.5-3.1 4.6-3.3 6.1.3.5.5 1.1.5 1.8 0 1.8-1.2 3.2-2.8 3.2-.2 0-.3-.1-.5-.1-.3 1.7-1.4 3.1-2.9 3.3.1.4.2.8.2 1.1 0 1.3-.6 2.4-1.4 3.2.4.2.8.5 1.1.8.2-3 2.4-5.4 5-5.4.4 0 .9.1 1.2.2.9-1.9 2.5-3.1 4.4-3.2.1-1 .7-2.2 2-3.4 4.3-4 9.7-1.8 10.3-5.9s3.5-8.1 6.9-8.8c3.4-.7 6.1-4.6 6.8-10 .7-5.5 11.1-11.4 11.1-11.4s2.5-10.8 8.8-10.7c1 0 13.3-15.7 19.5-23.2-5-5-10.4-9.7-16-14-4.4 7.4-23.3 38.6-25.8 41.7-2.5 3.3-7.3 3.3-6.6 6zM255.1 227c-1 .1-1.4 1.6-.9 3.2.5 1.7 1.7 2.9 2.7 2.8 1-.1 1.4-1.6.9-3.3-.5-1.6-1.7-2.9-2.7-2.7zM443 283.3c0 68.1-42.8 126.3-103 149 .1-5.6.4-15.9 1.2-23.6.7-6.4 1.2-12.9 2.5-18.4l-15.2-7.8L307 377c1.8-.9 3.7-2.3 5.3-4 .7-.7 1.3-1.4 1.9-2.2l6.1 1.9-3.7-5.6c1.9-3.6 2-6.8 1.4-9.5l-3.7-9.8-.7.3c-.7-1.2-1.2-2.5-1.3-3.7-.2-1.4 1-3.5 3.2-5.9l21.4-18.4c5.6-4.2 10-7.3 10-7.3l14.3-11.4-18.7 1s-1.8-6.6-12-14c1.5-1 2.5-2.9 2.5-5 0-.3-.1-.7-.1-1 1.6-1 2.6-2.9 2.6-5.1 0-1.3-.4-2.6-1.1-3.6 1.4-1 2.4-2.8 2.4-4.9 0-.7-.1-1.4-.3-2 2-.9 3.3-2.9 3.3-5.5 0-1.1-.3-2.2-.8-3.1.8-.8 1.4-1.5 2-2.2 2.8 0 5-2.6 5-5.8 0-1-.2-1.8-.6-2.7l.6-.3c2.7-.7 1.5-9.1 4.7-9.6 4.1-.8 7.3-12.8 7.3-12.8s7.2-3.5 6.5-6.3c-.7-2.7 4.1-2.7 6.8-6.1 2.7-3.4 11.3-20.2 11.3-20.2l15-20.3C425.7 200.7 443 240 443 283.3zm-87.7 50.5l4.9 11.8 9.2-3.9-5.8-13.5-8.3 5.6zm72 8.4l-6-19.2s-36.7 9.4-48.6 11.1l-.9 9.5-39.4 15 3.7 9.8 9.5 13.7 18.9 11.6c.9-1.5 2-2.8 3.4-3.9 14.2-10.4 55.4-47.6 59.4-47.6z"
        />
        <path
          fill="#493745"
          className="rotationLoader"
          d="M95.4 391.1c-18.7-32.6-28.6-69.8-28.6-107.6 0-37.3 9.7-74.1 27.9-106.4l51.5 29.1C133 229.6 126 256.3 126 283.5c0 27.5 7.2 54.5 20.7 78.2l-51.3 29.4zm404.7-107.6c0-37.3-9.7-74.1-27.9-106.4l-51.5 29.1c13.3 23.5 20.3 50.2 20.3 77.3 0 27.5-7.2 54.5-20.7 78.2l51.4 29.4c18.5-32.6 28.4-69.9 28.4-107.6z"
        />
      </svg>
    </div>
  );
};
