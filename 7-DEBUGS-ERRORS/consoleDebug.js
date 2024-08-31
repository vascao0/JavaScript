function somar(a, b) {
  console.debug("Entrando na função somar com os valores:", a, b);
  const resultado = a + b;
  console.debug("O resultado da soma é:", resultado);
  return resultado;
}

console.debug(somar(8,5));
