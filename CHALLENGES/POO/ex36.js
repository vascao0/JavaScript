class BankUser {
    constructor(saldo,deposito,saque){
        this.saldo = saldo
        this.deposito = deposito
        this.saque = saque
    }
}

BankUser.prototype.MyBank = function(){
    console.log(`Saldo: ${this.saldo} Reais`)
    console.log(`Saque: ${this.saque} Reais`)
    console.log(`Depósito: ${this.deposito} Reais`)
}

let vasco = new BankUser(52.00,50.00,1.00)
vasco.MyBank()