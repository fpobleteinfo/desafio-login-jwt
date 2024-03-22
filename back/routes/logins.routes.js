import express from "express";
import { loginUsuario, getUsuarioMail } from "../src/controllers/logins.controller.js";
import { validparameters } from "../middlewares/validateLoginParams.js";
import { isLogin } from "../middlewares/isLogin.js";
const router = express.Router();

router.post("/login", validparameters, loginUsuario);
router.get("/usuarios/:email", isLogin, getUsuarioMail);

export default router;