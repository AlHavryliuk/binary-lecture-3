import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../helpers/ctrlWrapper.js";
import { userService } from "../services/userService.js";

// Controller function to get all users

const getAllUsers = (req, res, next) => {
  const users = userService.getAll();
  req.response = { response: users };
  next();
};

// Controller function to get a user by ID

const getUserById = (req, res, next) => {
  const { id } = req.params;
  const user = userService.search({ id });
  if (!user) throw HttpError(404, "User not found");
  req.response = { response: user };
  next();
};

// Controller function to create a new user

const postUser = (req, res, next) => {
  const user = req.user;
  const response = userService.create(user);
  req.response = { status: 201, response };

  console.log(2);

  next();
};

// Controller function to create a new user

const putUser = (req, res, next) => {
  const newUserData = req.user;
  const { id } = newUserData;
  const response = userService.patch(id, newUserData);
  req.response = { status: 201, response };
  next();
};

// Controller function to delete a user

const deleteUser = (req, res, next) => {
  const { id } = req.params;
  userService.remove(id);
  req.response = { status: 204 };
  next();
};

// Exporting wrapped controller functions

export const getUsersCtrl = ctrlWrapper(getAllUsers);
export const getUserByIdCtrl = ctrlWrapper(getUserById);
export const postUserCtrl = ctrlWrapper(postUser);
export const putUserCtrl = ctrlWrapper(putUser);
export const deleteUserCtrl = ctrlWrapper(deleteUser);
