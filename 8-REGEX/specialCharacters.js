// 3 NÚMEROS
const dia = /\d\d/
console.log(dia.test("2024") && "2024".length == 2)
console.log(dia.test("asd"))
console.log(dia.test("asd"))
console.log(dia.test("05") && "05".length == 2)
console.log("-----------------------------")

const AtLeastThreeLetters = /\w\w\w/
console.log(AtLeastThreeLetters.test("dad"))

//VALIDADOR DE SENHA:
//NO MÍNIMO UM CARACTERE ESPECIAL
//NO MÍNIMO 5 CARACTERES
//NO MÍNIMO 1 NÚMERO

function validadordeSenha(str){
    if(/\W/.test(str) && /\w\w\w\w\w/.test(str) && /\d/.test(str)){
        console.log(`'${str}' is good password 👍`)
    } else{
        console.log(`'${str}' isn't good password 😢`)
    }
}

validadordeSenha("5asco@@5")

/*
OPERADORES
^ = responsável por negar; combinações são aceitas.
+ = diz que o elemento que vai se repetir
? = faz com que o digito anterior seja opcional
{} = inserir número de ocorrência
|| = "or" das condicionais

MODIFICADORES (FLAGS) 
i = insensitive case (ignorar maiusculo e minusculo)
g = procurar pela expressão toda
*/