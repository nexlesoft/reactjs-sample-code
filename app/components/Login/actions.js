import { LOGIN_SUCCESS, VALIDATE_USER, USERINFO_CHANGE,USER_LOGOUT } from './constants';

export function userInfoChanges(fieldName, value) {
  return {
    type: USERINFO_CHANGE,
    fieldName,
    value,
  };
}

export function validateUser(username, password) {
  return {
    type: VALIDATE_USER,
    username,
    password,
  };
}

export function setCurrentUserInfo(userInfo) {
  return {
    type: LOGIN_SUCCESS,
    userInfo,
  };
}

export function logout(){
  return {
    type: USER_LOGOUT
  };
}

