import { LOGIN_FAILED, LOGIN_FETCHING, LOGIN_SUCCESS } from "../constants";
import { LoginResult } from "../types/auth-result.type";

export interface LoginState {
  result?: LoginResult;
  isFetching: boolean;
  isError: boolean;
}

const initialState: LoginState = {
  isFetching: false,
  isError: false,
};

export default (state = initialState, { type, payload }: any): LoginState => {
  switch (type) {
    case LOGIN_FETCHING:
      return { ...state, isFetching: true, isError: false };
    case LOGIN_SUCCESS:
      return { ...state, isFetching: false, isError: false, result: payload };
    case LOGIN_FAILED:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};
