const arr = [1,2,3,4,5]

//1° FORMA
for (index in arr) {
    console.log(arr[index] + 5)
}
console.log("***************")

// 2° FORMA
arr.forEach((arr2) => {
    console.log(arr2 + 5)
})
console.log("***************")

for (let i = 0; i < arr.length; i++){
    console.log(arr[i] + 5)
}
console.log("***************")