let vasco = new String("vascaoooooooooooo vasco 1849 casss")
let vasco2 = new RegExp(/vascao/i)
let email = 'vascaoadada@gmail.com'

let n = '1 10 100 1000 0'

console.log(vasco2.test(vasco)) // teste se o texto regex está incluido na outra variavel

console.log(vasco.search(/Vasco/i)) //pesquisa e mostra em qual indice qual começa 
console.log(vasco.replace(/vasco/ig,"grandao")) // substitui

console.log(email.match(/[a-j | k-v |0-9]/ig)) //procura e mostra o texto
// '-' é um limitador

'META CARACTERES'
console.log(vasco.match(/\d/ig)) //NÚMEROS
console.log(vasco.match(/\s/ig)) //ESPAÇOS
console.log(vasco.match(/\bA/ig)) //DWORDS, PALAVRA EM ESPECIFICA

//QUANTIFICADOR
console.log(vasco.match(/o+/ig)) // CONTA QUANTAS LETRAS ESPECÍFICAS TEM EM UMA PALAVRA E MOSTRA SE É OU NAO REPETIDA
console.log(vasco.match(/cas*/ig)) // PROCURA SOMENTE O PRIMEIRO SOZINHO E OS SUCESSORES JUNTOS 
console.log(n.match(/10*/ig)) // PROCURA O PRIMEIRO TERMO  OU O PRIMEIRO E O SEGUNDO TERMO JUNTOS



let arr = ['vascoooo','vascaoo','1879']
arr = arr.join("")
console.log(arr.match(/o+/ig))