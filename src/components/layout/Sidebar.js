import React from "react";
import "./sidebar.css";
import { Link } from 'react-router-dom';

import {  useSelector } from "react-redux";

const Sidebar = () => {

  const clickAction = useSelector((state) => state.layout.click);

  return (
    <div className={ clickAction ? "sidebar sidebar_responsive" : "sidebar"}>
      <div className="sidebar__title">
        <img src="/images/cropped-logoRadix.png" alt="logo" />
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home" />
          <Link to="/inicio">Inicio</Link>
        </div>
        <h2>Modulos</h2>
        <div className="sidebar__link">
          <i className="fas fa-user"></i>
          <Link to="/usuarios">Usuarios</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
