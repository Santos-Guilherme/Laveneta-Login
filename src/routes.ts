import { Router, Request, Response } from "express";
import { AuthUserController } from "./Controllers/user/AuthUserController";
import { CreateUserController } from
    "./Controllers/user/CreateUserController";
const router = Router();
//Rotas USER ------------
router.post('/laveneta/userinsert', new CreateUserController().handle);
router.post('/laveneta/login', new AuthUserController().handle);
export { router };