let pessoa  = {
    id: 1,
    nome: "Vasco",
    idade: 25
}

const users = {
    id: 2, 
    name: "teste",
    age: 25,
    teste: function () {
        console.log("É U JS")
    }
}

console.log(users.teste())
console.log(users)

delete users.age
console.log(users)

users.vasco  = true
console.log(users)

const arr = [12,12]
arr[2] = "d"
console.log(arr[2])

delete arr[2]
console.log(arr)