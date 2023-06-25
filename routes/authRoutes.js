import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { loginCtrl } from "../controllers/auth.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

router.post("/login", authMiddleware, loginCtrl, responseMiddleware);

export { router };
