import { fromJS } from 'immutable';

import { CHANGE_SELECTEDCOMPONENT, APP_ACTION } from './constants';

import { userInfoModel } from '../../models/userInfos';

const initUserInfo = { ...userInfoModel };
// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  userInfo: initUserInfo,
  currentCompShown: '',
  openDownloadAppModal: false,
  openSignUpModal: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SELECTEDCOMPONENT:
      return state.set('currentCompShown', action.componentName);
    case APP_ACTION.OPEN_DOWNLOAD_APP_MODEL:
      return state.set('openDownloadAppModal', action.isDownloadAppOpen);
    case APP_ACTION.OPEN_SIGNUP_MODAL:
      return state.set('openSignUpModal', action.isSignupOpen);
    default:
      return state;
  }
}

export default appReducer;
