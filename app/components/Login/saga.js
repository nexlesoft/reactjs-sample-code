import { call, put, select, takeLatest } from 'redux-saga/effects';
import { VALIDATE_USER, LOGIN_SUCCESS, USER_LOGOUT } from './constants';
import { userInfoModel } from '../../models/userinfos';
import { setCurrentUserInfo } from './actions';
import history from '../../utils/history';

function* onValidateUser(action) {
  const { username, password } = action;
  const userInfo = {
    ...userInfoModel,
    firstName: 'Minh',
    username: 'Codie',
    lastName: 'Ha',
    roles: ['admin'],
  };
  yield put(setCurrentUserInfo(userInfo));
}

function* onLogout(action) {
  yield put(setCurrentUserInfo({}));
}

export default function* userLogin() {
  yield takeLatest(VALIDATE_USER, onValidateUser);
  yield takeLatest(USER_LOGOUT, onLogout);
}
