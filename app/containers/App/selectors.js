/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const selectRouter = state => state.get('router');

const makeSelectCurrentUser = () =>
  createSelector(selectGlobal, globalState => globalState.get('userInfo'));

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

const makeSelectCurrentCompShown = () =>
  createSelector(selectGlobal, compShown => compShown.get('currentCompShown'));

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );

const makeSelectStatusDownloadModal = () =>
  createSelector(selectGlobal, globalState =>
    globalState.get('openDownloadAppModal'),
  );

const makeSelectStatusSignupModal = () =>
  createSelector(selectGlobal, globalState =>
    globalState.get('openSignUpModal'),
  );

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectCurrentCompShown,
  makeSelectLoading,
  makeSelectError,
  makeSelectLocation,
  makeSelectStatusDownloadModal,
  makeSelectStatusSignupModal,
};
