import { obtenerPorMail } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { findError } from "../utils/utils.js";


export const loginUsuario = async (req, res) => {
    const user = req.body;
    try {
      const findUsuario = await obtenerPorMail(user.email);
      if (!findUsuario) {
        const errorFound = findError("auth_01");
        return res
        .status(errorFound[0].status)
        .json({ error: errorFound[0].message });
      } else {
        const isPasswordValid = bcrypt.compareSync(
          user.password,
          findUsuario.password
        );
        if (!isPasswordValid) {
          const errorFound = findError("auth_02");
          return res
          .status(errorFound[0].status)
          .json({ error: errorFound[0].message });
        } else {
          const { email } = findUsuario;
          const token = jwt.sign({ email }, process.env.JWT_SECRET, {
            expiresIn: "1h",
          });
          res.status(200).json({
            message: `Bienvenido, ${email} has iniciado sesion`,
            code: 200,
            token,
          });
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  };

  export const getUsuarioMail = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await obtenerPorMail(email);
        res.status(200).json({user: user})          
    } catch (error) {
        const errorFound = findError(error.code)
        res.status(errorFound[0].status).json({error: errorFound[0].message})            
    }
  }