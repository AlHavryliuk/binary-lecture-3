import { Router } from "express";
import {
  deleteUserCtrl,
  getUserByIdCtrl,
  getUsersCtrl,
  postUserCtrl,
  putUserCtrl,
} from "../controllers/users.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

router.get("/", getUsersCtrl, responseMiddleware);
router.get("/:id", getUserByIdCtrl, responseMiddleware);
router.post("/", createUserValid, postUserCtrl, responseMiddleware);
router.put("/:id", updateUserValid, putUserCtrl, responseMiddleware);
router.delete("/:id", deleteUserCtrl, responseMiddleware);

// TODO: Implement route controllers for user

export { router };
