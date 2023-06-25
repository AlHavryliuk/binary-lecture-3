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

const router = Router();

router.get("/", getAllFightersCtrl);
router.get("/:id", getFighterByIdCtrl);
router.post("/", createFighterValid, postFighterCtrl);
router.put("/:id", updateFighterValid, putFighterCtrl);
router.delete("/:id", deleteFighterCtrl);

// TODO: Implement route controllers for fighter

export { router };
