import { Router } from "express";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import {
  getFightByIdCtrl,
  getFightHistoryCtrl,
  postFightCtrl,
  removeFightCtrl,
} from "../controllers/fights.js";
import { createFightValid } from "../middlewares/fight.middleware.js";

const router = Router();

router.get("/", getFightHistoryCtrl, responseMiddleware);
router.get("/:id", getFightByIdCtrl, responseMiddleware);
router.post("/", createFightValid, postFightCtrl, responseMiddleware);
router.delete("/:id", removeFightCtrl, responseMiddleware);

// OPTIONAL TODO: Implement route controller for fights

export { router };
