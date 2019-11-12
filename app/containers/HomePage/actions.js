import {
  CHANGE_USERNAME,
  RECEIVE_REQUEST_BUNDLE_RESULT,
  SEND_REQUEST_BUNDLE,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name,
  };
}

export function sendRequestBundle(noRequest) {
  return {
    type: SEND_REQUEST_BUNDLE,
    noRequest,
  };
}

export function getRequestInfoBundle(data) {
  return {
    type: RECEIVE_REQUEST_BUNDLE_RESULT,
    data,
  };
}
