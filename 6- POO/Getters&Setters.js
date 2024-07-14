class UserName{
    constructor(name){
        this.name = name
    }

    get SeeName(){
        return  `'${this.name}'`
    }

    set NewName(value){
        this.name = value
    }
}

let vasco = new UserName("teste"); 
vasco.NewName = 's'
console.log(vasco.SeeName)