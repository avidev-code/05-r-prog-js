import { describe, it, expect } from "vitest";
const {
  obtenerPI,
  obtenerContador,
  obtenerNombreCurso,
  reasignarMensaje,
  calcularTotal,
  identificarTipos,
  demostrarHoisting,
} = require("./challenge-04");   // ← matches your real file name

describe("Reto 01 - Var, Let y Const", () => {
  describe("Reto 1: obtenerPI", () => {
    it("debe retornar el valor 3.14159", () => {
      expect(obtenerPI()).toBe(3.14159);
    });

    it("debe retornar un número", () => {
      expect(typeof obtenerPI()).toBe("number");
    });
  });
});