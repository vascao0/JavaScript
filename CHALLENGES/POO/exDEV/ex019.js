class Retangulo{
    constructor(largura,altura){
        this.largura = largura
        this.altura = altura
    }

    calcularArea(){
        return this.largura * this.altura
    }

    calcularPerimetro(){
        return 2 * Number(this.altura + this.largura)
    }
}

let vasco = new Retangulo(30,50)

console.log(vasco.calcularPerimetro())