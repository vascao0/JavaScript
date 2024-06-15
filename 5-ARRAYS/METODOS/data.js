function tst (...args) {
    for(let i = 0; i < args.length; i++){
        console.log(args[i])
    }
}

let number = 5

tst("d", true,number)