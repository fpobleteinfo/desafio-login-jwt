const ERRORS = [
  {
    code: "23502",
    status: 400,
    message: "Los campos enviados no pueden venir NULL",
  },
  {
    code: "22P02",
    status: 400,
    message: "No se encontró algun dato necesario",
  },
  {
    code: "2201W",
    status: 400,
    message: "Limit no puede ser valor negativo",
  },
  {
    code: "auth_01",
    status: 400,
    message: "No se encontró el email",
  },
  {
    code: "auth_02",
    status: 400,
    message: "Password no coincide",
  },
  {
    code: "auth_03",
    status: 401,
    message: "No se encuentra token",
  },
  {
    code: "auth_04",
    status: 401,
    message: "Token inválido",
  },
  {
    code: "42P01",
    status: 500,
    message: "Error en la conexion con la base de dato.",
  },
  {
    code: "42601",
    status: 400,
    message: "Error de sintaxis en consulta.",
  },
];

export default ERRORS;
