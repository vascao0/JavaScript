class AdressUser{
    constructor(cidade,estado){
        this.cidade = cidade
        this.estado = estado
    }

    print(){
        console.log(`CIDADE: "${this.cidade}"`)
        console.log(`ESTADO: "${this.estado}"`)
    }
}

let vasco =  new AdressUser("VDC","BA")

AdressUser.prototype.team = 'vasco'
console.log(vasco.team)

console.log(vasco)

vasco.print()