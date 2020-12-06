import React from "react";
import "./spinner.css";

const Spinner = ({title}) => {
  return (
    <div className="spinner__container">
      <p>{title}</p>
      <div className="sk-chase">
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
      </div>
    </div>
  );
};

export default Spinner;
