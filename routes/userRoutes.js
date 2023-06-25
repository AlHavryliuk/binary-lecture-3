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

const router = Router();

router.get("/", getUsersCtrl);
router.get("/:id", getUserByIdCtrl);
router.post("/", createUserValid, postUserCtrl);
router.put("/:id", updateUserValid, putUserCtrl);
router.delete("/:id", deleteUserCtrl);

// TODO: Implement route controllers for user

export { router };
