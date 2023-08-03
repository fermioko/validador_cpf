/** @jest-environment jsdom */

const { validarCPF } = require("./script")

test("Testar CPF Válido", function() {
  var resultado = validarCPF("16576790040");
  
  expect(resultado).toBe(true)
})

test("Testar CPF Inválido", () => {
  var resultado = validarCPF("12345678912");
  
  expect(resultado).toBe(false)
})