import express from 'express';
import { agregarUser } from '../src/controllers/users.controller.js';
const router = express.Router();

router.post('/usuarios', agregarUser)

export default router