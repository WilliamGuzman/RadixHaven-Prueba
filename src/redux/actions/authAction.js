import axios from "axios";
import tokenAuth from "../../config/token";
import {
  LOGIN_SUCCESS,
  LOG_OUT,
  VALIDATE_TOKEN_SUCCESS,
  VALIDATE_TOKEN_ERROR,
  LOGIN_ERROR,
} from "../types";

//VALIDATE USER
export function validateUserAction() {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(validateUserTokenSuccess());
    } else {
      tokenAuth();
      dispatch(validateUserTokenError());
    }
  };
}

//VALIDATE USER TOKEN SUCCESS
const validateUserTokenSuccess = () => ({
  type: VALIDATE_TOKEN_SUCCESS,
});

//VALIDATE USER TOKEN ERROR
const validateUserTokenError = () => ({
  type: VALIDATE_TOKEN_ERROR,
});

//USER LOGIN
export function authUserLogin(values) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://radix-haven-backend-demo.herokuapp.com/api/v1/user/login",
        values
      );
      
      tokenAuth(response.data.Token);
      dispatch(loginSuccess(response.data.Token));
    } catch (error) {
      dispatch( loginError() );
    }
  };
}

//User login success
const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

//User login error
const loginError = () => ({
  type: LOGIN_ERROR
});

//USER LOGOUT
export function logOutAction() {
  return async (dispatch) => {
    try {
      await axios.post(
        "https://radix-haven-backend-demo.herokuapp.com/api/v1/user/logout"
      );
      dispatch(logOut());
    } catch (error) {
      console.log(error);
    }
    //https://radix-haven-backend-demo.herokuapp.com/api/v1/user/logout
  };
}

//User LogOut
const logOut = () => ({
  type: LOG_OUT,
});
