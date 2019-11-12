import { parseNumber } from 'libphonenumber-js';

export function validatePhoneNumber(phoneNumber, callingCode) {
  let tempPhoneNumber = '';
  if (phoneNumber.charAt(0) === '0') {
    tempPhoneNumber = phoneNumber.substring(1, phoneNumber.length);
  }
  const newPhoneNumber = `${callingCode}${tempPhoneNumber}`;
  const phoneObject = parseNumber(newPhoneNumber, { extended: true });
  if (!phoneObject.phone || !phoneObject.possible) {
    return false;
  }
  return `${callingCode}${phoneObject.phone}`;
}

export function isEmpty(obj) {
  return obj === undefined || obj === null || obj === '';
}
