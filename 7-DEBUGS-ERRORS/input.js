function vasco(n) {
  let resultado = Number(n);
  if (Number.isNaN(resultado)) {
    console.log(n + " nao é numero");
  } else {
    return resultado;
  }
}

vasco("dadad");