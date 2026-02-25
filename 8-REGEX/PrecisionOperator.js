let vascao = /\d{1}-\d{0-9}/
console.log(vascao.test("123-2024 "))

//VALIDADOR DE TELEFONE
let euMesmo = /\W\d{1,2}\W\d{4,5}-\d{4}/
console.log(euMesmo.test("(77)98868-1209"))