import { Router } from "express";
import { UsersController } from "./controllers/UserController";

const router = Router();
const createUserController = new UsersController

router.post("/createUsers", createUserController.create)

export {router}