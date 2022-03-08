import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOGOUT,
} from "./types";
import { auth, provider } from "../firebase";

export const userLogin = (user) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    if (!user) {
      const res = await auth.signInWithPopup(provider);
      console.log(res);
      const profile = {
        displayName: res.user.displayName,
        photoURL: res.user.photoURL,
        email: res.user.email,
        uid: res.user.uid,
      };
      sessionStorage.setItem("q-user", JSON.stringify(profile));

      dispatch({ type: LOGIN_SUCCESS, payload: profile });
    } else {
      const { email, password } = user;
      const res = await auth.signInWithEmailAndPassword(email, password);
      const profile = {
        name: res.additionalUserInfo.profile.name,
        photo: res.additionalUserInfo.profile.picture,
      };
      sessionStorage.setItem("q-user", JSON.stringify(profile));

      dispatch({ type: LOGIN_SUCCESS, payload: profile });
    }
  } catch (error) {
    console.log(error.message);
    dispatch({ type: LOGIN_FAIL, payload: error.message });
  }
};

export const userRegister = (user) => async (dispatch) => {
  try {
    const { email, password } = user;
    dispatch({ type: REGISTER_REQUEST });

    const reg = await auth.createUserWithEmailAndPassword(email, password);

    console.log(reg);

    dispatch({ type: REGISTER_SUCCESS, payload: reg });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: REGISTER_FAIL, payload: error.message });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: USER_LOGOUT });

  sessionStorage.removeItem("q-user");
};
