import { Router } from "express";

import { AuthenticationController } from "./controllers/AuthenticationController";
import { MessageController } from "./controllers/MessageController";
import { UserController } from "./controllers/UserController";
import { ensureAuthenticated } from "./middlewares/EnsureAuthenticated";

const authenticationController = new AuthenticationController()
const messagesController = new MessageController()
const userController = new UserController()

const router = Router()

router.post("/authenticate", authenticationController.create)
router.post("/messages", 
    ensureAuthenticated,
    messagesController.create
)
router.get("/messages/last", messagesController.getLastMessages )
router.get("/profile", ensureAuthenticated, userController.show)

export { router }