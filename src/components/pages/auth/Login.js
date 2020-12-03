import React, { useState } from "react";
import "./login.css";

const Login = ( props ) => {

  console.log(props)


  const [datos, guardarDatos] = useState({
    correo: "",
    password: "",
  });

  const { correo, password } = datos;

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
    if (correo.trim() === "" || password.trim() === "") {
      getErrors({
        email: true,
        password: true,
      });
      return;
    }
    if (correo.trim() === "") {
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

    getErrors({
      email: false,
      password: false,
    });
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
              name="correo"
              onChange={ObtenerInformacion}
            />
            <div className="error">
              {errors.email ? (
                <>
                  <p>Campo requerido</p>
                  <i className="fas fa-exclamation-circle"></i>
                </>
              ) : null}
            </div>
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
