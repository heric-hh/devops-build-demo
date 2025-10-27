const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hola Mundo desde Express.js, listo para DevOps Build!");
});

app.get("/hola", (req, res) => {
  res.send("saludos");
});

app.listen(PORT, () => {
  console.log(`Aplicación Express escuchando en http://localhost:${PORT}`);
});
