import { LOGIN_SUCCESS, LOG_OUT, VALIDATE_TOKEN_SUCCESS,VALIDATE_TOKEN_ERROR, LOGIN_ERROR } from "../types";
const initialState = {
  error: false,
  msg: "",
  authenticated: null,
  loading: null,
};

export default function auth( state = initialState, action ){
  switch (action.type) {
    
    case LOGIN_SUCCESS: {
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        authenticated: true,
        error: false,
        loading: false,
      };
    }
    case VALIDATE_TOKEN_ERROR:
    case LOGIN_ERROR:
    case LOG_OUT:{
      localStorage.removeItem('token');
      return{
        ...state,
        authenticated: false,
        loading: true,
      }
    }

    case VALIDATE_TOKEN_SUCCESS:{
      return{
        ...state,
        authenticated: true,
        loading: false
      }
    }

    default:
      return state;
  }
}
