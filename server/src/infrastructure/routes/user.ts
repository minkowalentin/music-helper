import express from "express";
import UserController from "../controllers/user";

const router = express.Router();
const userController = new UserController();

router
  .route("/")
  .get(userController.listAllUsers)
  .post(userController.createNewUser);

export default router;
