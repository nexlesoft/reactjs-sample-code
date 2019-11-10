import { call, put, select, takeLatest } from 'redux-saga/effects';
import { userInfoModel } from '../../models/userinfos';
import { CHANGE_SELECTEDCOMPONENT } from '../../containers/App/constants';

function* displayComponent(action){

}


export default function* userManagement() {
  //yield takeLatest(CHANGE_SELECTEDCOMPONENT, displayComponent);
}
