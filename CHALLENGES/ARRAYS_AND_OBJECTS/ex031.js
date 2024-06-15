let array1 = [1,2,3,4,5]
let array2 = [1,2,3]
function numberElements(){
    if(array1.length == 5 || array2.length == 5){
        console.log("muitos elementos")
    } else{
        console.log("poucos elementos")
    }
}

numberElements()