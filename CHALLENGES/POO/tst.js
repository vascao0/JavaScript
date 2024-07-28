let x = [5,2,6,5]
let y = [4,2,6,5]

let uniao = []
let diferenca = []
for(let i = 0; i < x.length && i < y.length;i++){
    uniao[x[i]] = true
    uniao[y[i]] = true
}

let resultado = Object.keys(uniao).map(Number);
console.log(resultado);