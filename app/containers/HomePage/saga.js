/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';
import { reposLoaded, repoLoadingError } from '../App/actions';
import { SEND_REQUEST_BUNDLE } from './constants';
import { getRequestInfoBundle } from './actions';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export function* getRequestBundleInfos() {
  yield put(getRequestInfoBundle([{ url: 'request result info' }]));
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  yield takeLatest(SEND_REQUEST_BUNDLE, getRequestBundleInfos);
}
