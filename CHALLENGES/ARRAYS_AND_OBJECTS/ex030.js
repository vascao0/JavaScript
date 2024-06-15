let users = ["pedro", "vasco", "da", "gama", "developer"]
if(users.includes("pedro") == true){
    console.log("ne")
} else{
    console.log('n')
}

if (users.indexOf("pedro") != -1){
    console.log("tem")
} else{
    console.log("tem nao")
}

function teste(...args){
    for(let i = 0; i<args.length;i++){
        console.log(args[i])
    }
}

teste("d","s")
