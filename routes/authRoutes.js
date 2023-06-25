import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { loginCtrl } from "../controllers/auth.js";

const router = Router();

router.post("/login", authMiddleware, loginCtrl);

export { router };
