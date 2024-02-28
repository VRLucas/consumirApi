import * as types from '../type';
export function loginSuccess(payload) {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
}
export function loginFail(payload) {
  return {
    type: types.LOGIN_FAIL,
    payload,
  };
}
export function loginRequest(payload) {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}

export function registerRequest(payload) {
  return {
    type: types.REGISTER_REQUEST,
    payload,
  };
}

export function registerUpdateSuccess(payload) {
  return {
    type: types.REGISTER_UPDATE_SUCCESS,
    payload,
  };
}
export function registerCreateSuccess(payload) {
  return {
    type: types.REGISTER_CREATE_SUCCESS,
    payload,
  };
}
export function registerFail(payload) {
  return {
    type: types.REGISTER_REQUEST,
    payload,
  };
}
