class Voo{
    constructor(codigoVoo,origem,destino,assentosDisponiveis){
        this.codigoVoo = codigoVoo
        this.origem = origem
        this.destino = destino
        this.assentosDisponiveis = assentosDisponiveis
    }

    reservarAssento(){
        this.assentosDisponiveis >= 1 ? this.assentosDisponiveis-- : console.log(`assentos indisponíveis`)
    }

    consultarAssentosDisponiveis(){
        return this.assentosDisponiveis
    }
}

let vascao = new Voo(0.005,"RJ","SP",8)

vascao.reservarAssento(8)
console.log(vascao.consultarAssentosDisponiveis())