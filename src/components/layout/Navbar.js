import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import "./navbar.css";

import { eventClick } from "../../redux/actions/layoutAction";
import { getUserFavico } from "../../redux/actions/userAction";
import { logOutAction } from "../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";

const Nabvar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const clickAction = useSelector((state) => state.layout.click);
  const userInfo = useSelector((state) => state.layout.userData);

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    dispatch(eventClick(!click));
  };

  const logOut = () => {
    Swal.fire({
      title: "Desea salir de la Aplicación?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, salir!",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logOutAction());
        Swal.fire({
          icon: "success",
          title: "Cerro Sesion Correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
        history.push("/");
      }
    });
  };

  useEffect(() => {
    dispatch(getUserFavico());

    //eslint-disable-next-line
  }, []);

  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={handleClick}>
        <i className={clickAction ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <div className="navbar__right">
        <a href="!#">
          <img
            className="img__avatar"
            src={
              userInfo.mail !== ""
                ? `https://www.gravatar.com/avatar/${userInfo.mail}`
                : "/images/avatar.svg"
            }
            alt="avatar"
          />
        </a>
          <label>{userInfo.first_name}</label>
        <a  onClick={logOut} className="salir">
          <i className="fas fa-sign-out-alt"></i>
        </a>
      </div>
    </nav>
  );
};

export default Nabvar;
