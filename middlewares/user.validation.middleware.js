import { USER } from "../models/user.js";
import { userIsValid } from "../helpers/userIsValid.js";
import HttpError from "../helpers/HttpError.js";
import { userService } from "../services/userService.js";

const createUserValid = (req, res, next) => {
  const { email, lastName, firstName, password, login, phoneNumber } = req.body;
  const user = {
    ...USER,
    email,
    lastName,
    firstName,
    password,
    login,
    phoneNumber,
  };

  if (!userIsValid(user)) throw HttpError(400, "Invalid credentials");

  req.user = user;

  // TODO: Implement validatior for USER entity during creation

  next();
};

const updateUserValid = (req, res, next) => {
  const { id } = req.params;
  const {
    email = null,
    lastName = null,
    firstName = null,
    password = null,
    login = null,
    phoneNumber = null,
  } = req.body;

  const user = userService.search({ id });

  if (!user) throw HttpError(404, "User not found");

  const updateUser = {
    ...user,
    email: email ?? user.email,
    lastName: lastName ?? user.lastName,
    firstName: firstName ?? user.firstName,
    password: password ?? user.password,
    login: login ?? user.login,
    phoneNumber: phoneNumber ?? user.phoneNumber,
  };

  if (!userIsValid(updateUser)) throw HttpError(400, "Invalid credentials");

  req.user = updateUser;

  // TODO: Implement validatior for user entity during update
  next();
};

export { createUserValid, updateUserValid };
