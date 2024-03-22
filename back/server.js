import express from "express";
import cors from 'cors'
import 'dotenv/config.js';
import usersRouter from "./routes/users.routes.js"
import loginsRouter from "./routes/logins.routes.js"
import { logger } from "logger-express";

const PORT = process.env.PORT || 3300;


const app = express();
app.use(cors());
app.use(express.json()); // middleware
app.use(logger());
app.use(usersRouter);
app.use(loginsRouter);

//routers
app.use('/usuarios', usersRouter)
app.use('/login', loginsRouter)

app.listen(PORT, console.log(`¡Servidor encendido! http://localhost:${PORT}`));