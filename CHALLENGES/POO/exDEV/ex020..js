class ContaBancaria{
    constructor(numeroConta, saldo){
        this.numeroConta = numeroConta
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    sacar(valor){
        this.saldo >= valor ? this.saldo -= valor : console.log(`O seu saldo: "${this.saldo}" \nnão condiz com o valor do saque: "${valor}"`)
    }

    consultarSaldo(){
        return this.saldo
    }
}

let vascao = new ContaBancaria(0.1,5000)
vascao.depositar(5000)
vascao.sacar(9001)
console.log(vascao.consultarSaldo())