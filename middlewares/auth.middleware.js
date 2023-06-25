import HttpError from "../helpers/HttpError.js";
import { authService } from "../services/authService.js";

const authMiddleware = (req, res, next) => {
  const { login = null, password = null } = req.body;
  if (!login || !password) throw HttpError(401, "Not all data");
  const user = authService.login({ login });
  if (!user) throw HttpError(401, "Incorrect login or password");
  if (user.password !== password)
    throw HttpError(401, "Incorrect login or password");
    
  req.user = user;

  // TODO: Implement middleware that returns result of the query
  next();
};

export { authMiddleware };
