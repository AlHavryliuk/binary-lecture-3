import { Router } from "express";
import {
  deleteFighterCtrl,
  getAllFightersCtrl,
  getFighterByIdCtrl,
  postFighterCtrl,
  putFighterCtrl,
} from "../controllers/fighters.js";
import {
  createFighterValid,
  updateFighterValid,
} from "../middlewares/fighter.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

router.get("/", getAllFightersCtrl, responseMiddleware);
router.get("/:id", getFighterByIdCtrl, responseMiddleware);
router.post("/", createFighterValid, postFighterCtrl, responseMiddleware);
router.put("/:id", updateFighterValid, putFighterCtrl, responseMiddleware);
router.delete("/:id", deleteFighterCtrl, responseMiddleware);

// TODO: Implement route controllers for fighter

export { router };
