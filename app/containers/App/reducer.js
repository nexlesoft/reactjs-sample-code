import { fromJS } from 'immutable';

import { CHANGE_SELECTEDCOMPONENT } from './constants';
import { USERINFO_CHANGE, LOGIN_SUCCESS } from '../../components/Login/constants';

import { userInfoModel } from '../../models/userinfos';

const initUserInfo = { ...userInfoModel };
// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  userInfo: initUserInfo,
  currentCompShown: '',
});

// let localState = localStorage.getItem('global');
// if(localState && localState !== undefined){
//   try{
//     initialState = JSON.parse(localState);
//   }catch (e) {
//
//   }
// }

function appReducer(state = initialState, action) {
  switch (action.type) {
    // case LOAD_REPOS:
    //   return state
    //     .set('loading', true)
    //     .set('error', false)
    //     .setIn(['userData', 'repositories'], false);
    // case LOAD_REPOS_SUCCESS:
    //   return state
    //     .setIn(['userData', 'repositories'], action.repos)
    //     .set('loading', false)
    //     .set('currentUser', action.username);
    case USERINFO_CHANGE:
      return state.setIn(['userInfo', action.fieldName], action.value);
    case LOGIN_SUCCESS:
      return state.set('userInfo', fromJS(action.userInfo));
    case CHANGE_SELECTEDCOMPONENT:
      return state.set('currentCompShown', action.componentName);
    default:
      return state;
  }
}

export default appReducer;
