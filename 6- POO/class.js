function tst (str) {
    let vascao = Object.create({})
    vascao.str = str
    return vascao
}

let eu = tst("vascaoo")
console.log(eu.str)