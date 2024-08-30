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

console.log(vascao)
console.log(new Pedrao instanceof user)

class vascao{ constructor(vasco) {this.vasco = true} }