import { crearUsuario } from "../models/user.model.js";
import { findError } from "../utils/utils.js"

export const agregarUser = async (req, res) => {
    try {
      const user = req.body;
      const nuevoUser = await crearUsuario(user);
      res.status(201).json(nuevoUser);
      //res.status(201).json({post: nuevoPost})
    } catch (error) {
      //console.log(error)
      const errorFound = findError(error.code)
      res.status(errorFound[0].status).json({error: errorFound[0].message})
    }
  };