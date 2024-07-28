class userName{
    constructor(name){
        this.name = name
    }

    get SeeName(){
        return this.name + ' esse é o valor'
    }

    set NewName(value){
        this.name = value
    }
}

let vasco = new userName("vasco")
vasco.NewName = 'thor'
console.log(vasco.SeeName)