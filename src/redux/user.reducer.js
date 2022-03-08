import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  USER_LOGOUT,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./types";

const sessionStorageGetUser = sessionStorage.getItem("q-user")
  ? JSON.parse(sessionStorage.getItem("q-user"))
  : null;

const initialState = {
  loading: true,
  user: sessionStorageGetUser,
  error: null,
};

export const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        loading: true,
        error: null,
        user: null,
      };

    default:
      return state;
  }
};

export const regReducer = (
  state = { loading: true, users: [], error: null },
  { type, payload }
) => {
  switch (type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
