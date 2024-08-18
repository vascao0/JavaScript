class user{
    constructor(age){
        this.age = age
    }
}

class Pedrao extends user{
    constructor(age,job){
        super(age,job)
        this.job = job
    }
}

// let vascao = new Pedrao(18,"é")
// console.log(vascao)
console.log(new Pedrao instanceof user)