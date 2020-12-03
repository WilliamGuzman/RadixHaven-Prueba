import { EVENT_CLICK } from "../types";

const initialState = {
  click: false,
};

export default function (state = initialState, action) {
  switch (action.type) {

    case EVENT_CLICK:{
        return {
            click: action.payload
        }
    }

    default:
      return state;
  }
}