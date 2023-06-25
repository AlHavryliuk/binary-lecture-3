import { router as userRoutes } from "./userRoutes.js";
import { router as authRoutes } from "./authRoutes.js";
import { router as fighterRoutes } from "./fighterRoutes.js";
import { router as fightRoutes } from "./fightRoutes.js";

const initRoutes = (app) => {
  app.use("/api/users", userRoutes);
  app.use("/api/fighters", fighterRoutes);
  // app.use("/api/fights", fightRoutes);
  app.use("/api/auth", authRoutes);

  app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
  });

  app.use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ error: true, message });
  });
};

export { initRoutes };
