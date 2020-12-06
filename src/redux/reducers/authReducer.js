import { LOGIN_SUCCESS, LOG_OUT } from "../types";
const initialState = {
  error: false,
  msg: "",
  authenticated: false,
  loading: true,
};

export default function( state = initialState, action ){
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

    case LOG_OUT:{
      localStorage.removeItem('token');
      return{
        ...state,
        authenticated: false,
        loading: true,
      }
    }

    default:
      return state;
  }
}
