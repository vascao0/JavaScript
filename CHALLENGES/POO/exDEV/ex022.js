class Livro{
    constructor(titulo,autor,disponivel){
        this.titulo = String(titulo)
        this.autor = String(autor)
        this.disponivel = Boolean(disponivel)
    }

    emprestar(){
        this.disponivel == true ? this.disponivel = false : console.log("Livro indisponível para empréstimo")
    }

    devolver(){
        this.disponivel == false ? this.disponivel = true : console.log("Livro disponível para empréstimo")
    }

    consultarDisponibilidade(){
        return this.disponivel
    }
}

let vascao = new Livro("Vascao", "vasco", false)
vascao.emprestar()
vascao.devolver()
console.log(vascao.consultarDisponibilidade())