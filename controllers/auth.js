import ctrlWrapper from "../helpers/ctrlWrapper.js";

const login = (req, res, next) => {
  const userData = req.user;
  req.response = { status: 201, response: userData };
  next();
};

export const loginCtrl = ctrlWrapper(login);
