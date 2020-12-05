import React from "react";
import "./spinner.css";

const Spinner = () => {
  return (
    <div className="spinner__container">
      <p>Cargando usuarios</p>
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
