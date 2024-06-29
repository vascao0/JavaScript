function user(name,age){
    this.name = name
    this.age = age
}

user.prototype.vascao = function () {
    console.log(`é u vasco ${this.name} e ${this.age}`)
}

const user2 = new user ("é",15)

user2.vascao()