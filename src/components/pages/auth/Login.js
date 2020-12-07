import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { authUserLogin } from "../../../redux/actions/authAction";
import { useDispatch } from "react-redux";
import "./login.css";

const Login = () => {

  const history = useHistory();

  const dispatch = useDispatch();

  const [datos, guardarDatos] = useState({
    email: "",
    password: "",
  });

  const { email, password } = datos;

  const [errors, getErrors] = useState({
    email: false,
    password: false,
  });

  const ObtenerInformacion = (e) => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //VALIDAR CAMPOS VACIOS
    if (email.trim() === "" || password.trim() === "") {
      getErrors({
        email: true,
        password: true,
      });
      return;
    }
    if (email.trim() === "") {
      getErrors({
        email: true,
        password: false,
      });
      return;
    }
    if (password.trim() === "") {
      getErrors({
        email: false,
        password: true,
      });
      return;
    }

    //PASA VALIDACION
    getErrors({
      email: false,
      password: false,
    });

    dispatch(authUserLogin(datos));

    setTimeout(() => {
      history.push('/inicio');
    }, 1000);
  };

  return (
    <div
      className="hero"
      style={{ backgroundImage: "url(/images/LoginBg.svg)" }}
    >
      <div className="form-container">
        <img src="/images/cropped-logoRadix.png" alt="logo" />
        <h1>LOGIN</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={ObtenerInformacion}
            />
            {errors.email ? (
              <div className="error">
                <p>Campo requerido</p>
                <i className="fas fa-exclamation-circle"></i>
              </div>
            ) : null}
          </div>

          <div className="form-group">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={ObtenerInformacion}
            />
            <div className="error">
              {errors.password ? (
                <>
                  <p>Campo requerido</p>
                  <i className="fas fa-exclamation-circle"></i>
                </>
              ) : null}
            </div>
          </div>

          <div className="form-group">
            <button type="submit" className="btn-login">
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
