import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../helpers/ctrlWrapper.js";
import { userService } from "../services/userService.js";

// Controller function to get all users

const getAllUsers = (req, res, next) => {
  const users = userService.getAll();
  res.json({ users });
};

// Controller function to get a user by ID

const getUserById = (req, res) => {
  const { id } = req.params;
  const user = userService.search({ id });
  if (!user) throw HttpError(404, "User not found");
  res.json({ user });
};

// Controller function to create a new user

const postUser = (req, res) => {
  const user = req.user;
  const { phoneNumber, email } = user;
  const isNotAvailableEmail = userService.search({ email });
  if (isNotAvailableEmail)
    throw HttpError(409, "Conflict! Email is not available");
  const isNotAvailableNumber = userService.search({ phoneNumber });
  if (isNotAvailableNumber)
    throw HttpError(409, "Conflict! Phone number is not available");
  const response = userService.create(user);
  res.status(201).json(response);
};

// Controller function to create a new user

const putUser = (req, res) => {
  const newUserData = req.user;
  const { id } = newUserData;
  const response = userService.patch(id, newUserData);
  res.status(201).json(response);
};

// Controller function to delete a user

const deleteUser = (req, res) => {
  const { id } = req.params;
  const user = userService.search({ id });
  if (!user) throw HttpError(404, "User not found");
  userService.remove(id);
  res
    .status(204)
    .json({ message: "No Content! User has been deleted successfully" });
};

// Exporting wrapped controller functions

export const getUsersCtrl = ctrlWrapper(getAllUsers);
export const getUserByIdCtrl = ctrlWrapper(getUserById);
export const postUserCtrl = ctrlWrapper(postUser);
export const putUserCtrl = ctrlWrapper(putUser);
export const deleteUserCtrl = ctrlWrapper(deleteUser);
