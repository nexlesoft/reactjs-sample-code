/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import _ from 'lodash';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'connected-react-router/immutable';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    const currentState = getState();
    localStorage.setItem('appState', JSON.stringify(
      currentState,/* function(key, value) {
        return key !== 'router' ? value : undefined;
      },*/
    ));
    return result;
  };
};

const getStateFromLocalStorage = () => {
  try {
    if (localStorage.getItem('appState') !== null) {
      const currentState = JSON.parse(localStorage.getItem('appState'));
      return fromJS(currentState);
    }
  } catch (e) {
    return undefined;
  }
};

export default function configureStore(initialState = {}, history) {

  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state

  const middlewares = [sagaMiddleware, routerMiddleware(history), localStorageMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle, indent */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
  /* eslint-enable */

  const store = createStore(
    createReducer(),
    getStateFromLocalStorage(),
    //fromJS(initialState),
    composeEnhancers(...enhancers),
  );


  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
