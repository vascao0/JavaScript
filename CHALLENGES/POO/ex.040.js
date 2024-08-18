class BankAccount{
    constructor(contaCorrente, saldoPoupança, JurosPoupança){
        this.contaCorrente = contaCorrente
        this.saldoPoupança = saldoPoupança
        this.JurosPoupança = JurosPoupança
    }

    deposito(valor){
        this.saldoPoupança += valor   
    }

    saque(valor){
        this.saldoPoupança -= valor
    }

    dinheiroPoup_dinheiroCorr(){
        this.saldoPoupança = this.contaCorrente
    }
}