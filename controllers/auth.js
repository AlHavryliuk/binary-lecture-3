import ctrlWrapper from "../helpers/ctrlWrapper.js";

const login = (req, res) => {
  const userData = req.user;
  res.status(201).json(userData);
};

export const loginCtrl = ctrlWrapper(login);
