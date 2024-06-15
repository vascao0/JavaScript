const car =  {
    "brand": "BMW",
    "type": "Sedan",
    "propierty": "pedro"
}

let jsonToString = JSON.stringify(car)
console.log(jsonToString)
console.log(typeof jsonToString)

let stringToJson = JSON.parse(jsonToString)
console.log(jsonToString)
console.log(typeof stringToJson) 