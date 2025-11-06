const request = require("supertest");
const { expect } = require("chai");
const app = require("../server"); // Importamos la aplicación Express

describe("GET /", function () {
  // Aumentamos el timeout para dar tiempo a la aplicación a iniciarse si fuera necesario
  this.timeout(5000);

  it('Debería retornar "¡Hola CI/CD Build Exitoso!" y status 200', function (done) {
    request(app)
      .get("/")
      .expect("Content-Type", /text\/html/) // Espera que el tipo de contenido sea HTML
      .expect(200) // Espera un código de estado 200 (OK)
      .end((err, res) => {
        if (err) return done(err);
        // Verifica que el cuerpo de la respuesta contiene el texto que esperamos
        expect(res.text).to.include("¡Hola CI/CD Build Exitoso!");
        done();
      });
  });
});
