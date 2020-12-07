import { EVENT_CLICK, DATA_BOX_SUCCESS, DATA_BOX, USER_INFO } from "../types";

const initialState = {
  click: false,
  loading: true,
  databox: [],
  userData: []
};

export default function layout( state = initialState, action ){
  switch (action.type) {

    case EVENT_CLICK:{
        return {
            ...state,
            click: action.payload
        }
    }

    case DATA_BOX:{
      return{
        ...state,
        loading: true
      }
    }

    case DATA_BOX_SUCCESS:{
      return{
        ...state,
        databox: action.payload,
        loading: false
      }
    }

    case USER_INFO:{
      return{
        ...state,
        userData: action.payload
      }
    }

    default:
      return state;
  }
}