class user {
    constructor(age){
        this.age = age
    }
}

let id = Symbol()
user.prototype[id] = 6
let v15 = new user(15)
user.prototype.id = 8
console.log(user.prototype[id])

