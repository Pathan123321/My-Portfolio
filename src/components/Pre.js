import React from "react";
import "../style.css";

function Preloader({ load }) {
  return (
    <div id={load ? "modern-preloader" : "preloader-none"}>
      <div className="spinner"></div>
    </div>
  );
}

export default Preloader;
