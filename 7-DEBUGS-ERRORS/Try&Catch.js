try{ //AÇÃO A EXECUTAR
    a
} catch(e) { // O QUE FAZER SE FOR UM ERRO
    console.log(`algo deu errado '${e}'`)
} finally /*aparece mesmo assim, indepentente se é um erro ou não */{
    console.log("sim")
}