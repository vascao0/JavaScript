// ^ = not

const palavrasSemAeB = /[^a] && [^b]/ig
//nega a e b, caso um dos dois esteja presente no input

const palavrasSemAB = /[^ab]/ig
//nega ab, caso esteja presente no input 

console.log(palavrasSemAeB.test("abv"))