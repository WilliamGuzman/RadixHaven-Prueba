import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  SET_IMAGE_USER,
  GET_DATA_USER
} from "../types";

const initialState = {
  users: [],
  user: '',
  hashemail: '',
  loading: true,
  error: false,
  msg: "Error al cargar los usuarios",
};

export default function user( state = initialState, action ){
  switch (action.type) {
    case GET_USER: {
      return {
        ...state,
        loading: true,
        error: false
      }
    }

    case GET_USER_SUCCESS: {
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: false
      }
    }

    case GET_USER_ERROR:{
      return {
        ...state,
        error: true
      }
    }
    
      case SET_IMAGE_USER:{
          return{
              ...state,
              hashemail: action.payload
          }
      }

      case GET_DATA_USER:{
        return{
            ...state,
            user: action.payload
        }
    }

    default:
      return state;
  }
}
