function countVowels(str){
    let soma = 0
    for(let i = 0; i < str.split("").length; i++){
        if(str.match(/aeiou/ig)){
            soma++
        }
    }
    console.log(`Aqui tem ${soma} vogais, dentre elas são: ${str.match(/a|e|i|o|u/ig)}`)
    return `${str.match(/a|e|i|o|u+/ig).length} vogais encontradas`
}

countVowels("aeiouuu")