import pool from "../../db/connectionDB.js";
import bcrypt from "bcryptjs";

export const crearUsuario = async ({ email, password, rol, lenguage }) => {
    try {
      const hashedPassword = bcrypt.hashSync(password)
      const result = await pool.query(
        "INSERT INTO usuarios (email,password,rol,lenguage) VALUES ($1,$2,$3,$4) RETURNING *",
        [email,hashedPassword,rol,lenguage]
      );
      return result.rows[0];
    } catch (error) {
      console.error("Error al insertar", error);
      throw error;
    }
  };


  export const obtenerPorMail = async (email) => {
    try {
      const result = await pool.query(
        "SELECT * FROM usuarios WHERE email = $1",
        [email]
      );
      //console.log(result.rows[0]);
      return result.rows[0];
    } catch (error) {
      console.error("Error al obtener el registro:", error);
      throw error;
    }
  };

  