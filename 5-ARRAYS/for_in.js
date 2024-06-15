// FOR IN em ARRAY
let arr = ["data", 1,3]

//A CADA VEZ QUE O LOOP FOR TRUE, SERÁ PASSADO A VARIÁVEL "INDEX" PARA CADA INDICE DO ARRAY,
// E O QUE TIVER ENTRE AS CHAVES É O QUE ACONTECERÁ COM OS INDICES DO ARRAY
for (index in arr){
    console.log(`Neste índice(${index}) contém: "${arr[index]}" que é um dado do tipo: ${typeof index}`)
}

//FOR IN em OBJECT
let obj = {
    id: 1,
    user: "pedro",
    age: 16
}

for (propierty in obj){
    console.log(propierty + ': ' + obj[propierty] + ',')
}