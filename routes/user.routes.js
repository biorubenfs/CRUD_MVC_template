import { Router } from 'express';
import { userController } from '../controllers/user.controller.js';

// Create route
const userRoutes = Router();

// /user before this.
userRoutes.get("/", userController.list);
userRoutes.post("/", userController.create);
userRoutes.delete("/:id", userController.delete);
userRoutes.put("/:id", userController.update);

export default userRoutes;