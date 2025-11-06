// server.js (MODIFICACIÓN NECESARIA)
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("¡Hola CI/CD Build Exitoso!");
});

// Solo escucha el puerto si el módulo se ejecuta directamente (no cuando se importa para pruebas)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Aplicación Express escuchando en http://localhost:${PORT}`);
  });
}

module.exports = app; // <-- Exporta la app para que 'supertest' la use.
