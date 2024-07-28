class Car {
  constructor(marca, cor, gasolinaRestante) {
    this.marca = marca;
    this.cor = cor
    this.gasolinaRestante = gasolinaRestante
  }
}

let Mycar = new Car("fiat","white",48)
Car.prototype.dirigindo = Mycar.gasolinaRestante - 1
Car.prototype.abastecer = Mycar.gasolinaRestante + 1

console.log(Mycar)