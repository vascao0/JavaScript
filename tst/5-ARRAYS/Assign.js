let carro = {
    portas: 2,
    motor:2.0
}

let adicionais = {
    tetosolar: true,
    arcondicionado: true
}

Object.assign(carro,adicionais)

console.log(carro)