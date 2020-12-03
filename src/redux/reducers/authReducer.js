import { LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT } from "../types";

const initialState = {
  error: false,
  msg: "",
  authenticated: false,
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
