import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./navbar.css";

import { eventClick } from "../../redux/actions/layoutAction";
import { getUserFavico } from "../../redux/actions/userAction";
import { logOutAction } from "../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";

const Nabvar = () => {
    
  const dispatch = useDispatch();
  const clickAction = useSelector((state) => state.layout.click);
  const emailhash = useSelector((state) => state.layout.hashemail);

  const [click, setClick] = useState(false);

  const  handleClick = () => {
    setClick(!click);
    dispatch( eventClick(!click) );
  };
  
  const logOut = () => {
    dispatch( logOutAction() );
  }

  useEffect(() => {
    dispatch( getUserFavico() )
  },[])

  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={handleClick}>
        <i className={clickAction ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <div className="navbar__right">
        <a href="!#">
          <img className="img__avatar" src={ emailhash !== '' ? `https://www.gravatar.com/avatar/${emailhash}` : "/images/avatar.svg"}  alt="avatar" />
        </a>
        <label>USUARIO</label>
        <Link to="/" onClick={logOut}><i class="fas fa-sign-out-alt"></i></Link>
      </div>
    </nav>
  );
};

export default Nabvar;
