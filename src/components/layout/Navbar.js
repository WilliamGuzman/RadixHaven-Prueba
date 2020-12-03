import React, { useState } from "react";
import "./navbar.css";

import { eventClick } from "../../redux/actions/layoutAction";
import { useDispatch, useSelector } from "react-redux";

const Nabvar = () => {
    
  const dispatch = useDispatch();
  const clickAction = useSelector((state) => state.layout.click);

  const [click, setClick] = useState(false);

  const  handleClick = () => {
    setClick(!click);
    dispatch( eventClick(!click) );
  };
  

  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={handleClick}>
        <i className={clickAction ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <div className="navbar__right">
        <a href="!#">
          <img className="img__avatar" src="/images/avatar.svg" alt="avatar" />
        </a>
        <a href="!#">LogOut</a>
      </div>
    </nav>
  );
};

export default Nabvar;
