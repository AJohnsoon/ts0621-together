import { Router } from "express";
import { UsersController } from "./controllers/UserController";
import { TagsController } from "./controllers/TagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";


const router = Router();
const createUserController = new UsersController
const createTagController = new TagsController
router.post("/createUsers", createUserController.create)
router.post("/createTags", ensureAdmin ,createTagController.create)

export {router}