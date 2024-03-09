// for(let i = 5; i <= 10; i = i +1){
//     if(i % 10 ==0){
//         console.log("saiu do loop")
//         console.log(i)
//         break;
//     }

//     console.log("prosseguindo o loop")
// }

// for (let x = 0; x <= 10; x++){
//     if (x == 8){
//         console.log("cabo")
//         break;
//     } else{
//         console.log("mais um")
//     }

//     console.log(x)
// }


let y = 0
while(y <= 11){
    y = y + 1
    if (y % 2 == 0){
        console.log("é par")
    } else if(y % 2 != 0){
        console.log("impar")
    } else{
        console.log("ne nada")
    }

    console.log(y)
}
