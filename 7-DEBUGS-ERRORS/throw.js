function vascao(str){
    if(typeof(str) != 'string'){
        throw new Error("O parametro precisa ser uma string")
    } else{
        console.log('Olá ' + str)
    }
}

vascao("dada")
vascao(4)