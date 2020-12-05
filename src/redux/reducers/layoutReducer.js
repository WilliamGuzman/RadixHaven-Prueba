import { EVENT_CLICK, DATA_BOX_SUCCESS } from "../types";

const initialState = {
  click: false,
  databox: []
};

export default function (state = initialState, action) {
  switch (action.type) {

    case EVENT_CLICK:{
        return {
            click: action.payload
        }
    }

    case DATA_BOX_SUCCESS:{
      return{
        ...state,
        databox: action.payload
      }
    }

    default:
      return state;
  }
}