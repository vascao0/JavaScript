let Eu = {
    nome: 'pedro',
    idade: 15,
    time: 'vasco',
    language: function (){
        console.log("Javadadadadadaaaad")
    },
    sexo: 'todo dia',
}

Eu.nome = 'pedro freitas'
console.log(Eu.nome)
Eu.language()

// ADICIONAR METODO
Eu.altura = 1.74
console.log(Eu.altura)

//DELETAR METODO
delete Eu.idade
console.log(Eu.idade) // Undefined

console.log(Eu.sexo)



// [] = array
// {} = object