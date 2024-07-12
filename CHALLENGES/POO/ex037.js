class CarBuy{
    constructor(qtotal,vtotal,itens){
        this.qtotal = qtotal
        this.vtotal= vtotal
        this.itens = itens
    }

    print(){
        console.log(`${this.qtotal},${this.vtotal},${this.itens}`)
    }
}

let vasco = new CarBuy(15,50,"item")
vasco.print()