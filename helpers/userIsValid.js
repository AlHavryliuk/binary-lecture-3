import { generalNameValidation } from "./generalValidationFunc.js";

export const userIsValid = (user) => {
  if (!checkIsEmptyField(user)) return false;
  const { password, phoneNumber, email, firstName, lastName } = user;
  if (!generalNameValidation(firstName, lastName)) return false;
  if (!passwordValidation(password)) return false;
  if (!phoneNumberValidation(phoneNumber)) return false;
  if (!emailValidation(email)) return false;
  return true;
};

const checkIsEmptyField = (user) => {
  if (
    !user.firstName ||
    !user.lastName ||
    !user.email ||
    !user.phoneNumber ||
    !user.password
  ) {
    return false;
  }
  return true;
};

const passwordValidation = (password) => {
  return password.length < 3 ? false : true;
};

const phoneNumberValidation = (phoneNumber) => {
  const phoneRegex = /^\+380\d{9}$/;
  if (!phoneRegex.test(phoneNumber)) {
    return false;
  }
  return true;
};

const emailValidation = (email) => {
  const emailRegex = /^[a-z0-9]+(\.[a-z0-9]+)*@gmail\.com$/i;
  if (!emailRegex.test(email)) {
    return false;
  }
  return true;
};
