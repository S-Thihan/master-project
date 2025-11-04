import { Router } from "express";
import { login, logout, RegisterUser } from "../controllers/user";

const router = Router()

router.post("/register", RegisterUser);
router.post("/login", login);
router.post("/logout", logout);

export default router;