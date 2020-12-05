import axios from 'axios';
import tokenAuth from '../../config/token';
import { LOGIN_SUCCESS,LOG_OUT } from "../types";

//USER LOGIN
export function authUserLogin(values) {
  return async (dispatch) => {
    try {
      const response = await axios.post("https://radix-haven-backend-demo.herokuapp.com/api/v1/user/login", values);
      dispatch(loginSuccess(response.data.Token));
      tokenAuth(response.data.Token);
    } catch (error) {
      console.log(error);
    }
  };
}

//USER LOGOUT
export function logOutAction(){
  return (dispatch) => {
    dispatch( logOut() );
  }
} 

//User login success
const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

//User LogOut
const logOut = () => ({
  type: LOG_OUT
})