const vasco = (str) => {
    if(/[A-Z]/gi.test(str) && /-?/gi.test(str) && /[0-9]/gi && str.length >= 3 && str.length <= 16){
        console.log(str.length)
    }
}

vasco("pedro_1")

let adada = /^(?=.{5,}$)[a-z0-9-_\W+]/
console.log(adada.test("vasco@5"))

try{
    2+3=="a"
} catch(e){
    console.log("d")
} finally{
    console.log("ne nada")
}