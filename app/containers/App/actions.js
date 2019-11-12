import { CHANGE_SELECTEDCOMPONENT, APP_ACTION } from './constants';

export function changeSelectedComponent(componentName) {
  return {
    type: CHANGE_SELECTEDCOMPONENT,
    componentName,
  };
}

export function openDownLoadAppModel(isDownloadAppOpen) {
  return {
    type: APP_ACTION.OPEN_DOWNLOAD_APP_MODEL,
    isDownloadAppOpen,
  };
}

export function openSignup(isSignupOpen) {
  return {
    type: APP_ACTION.OPEN_SIGNUP_MODAL,
    isSignupOpen,
  };
}

export function reposLoaded() {}
export function repoLoadingError() {}
