class user{
    constructor(id){
        this.id = id
    }
}

let NewUser = new user(1) //CLASSE filho
console.log(NewUser.id)

user.prototype.id = 5 //classe Pai
console.log(user.prototype.id)