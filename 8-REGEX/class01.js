let vasco = new String("vascao vasco")
let vasco2 = new RegExp(/vascao/i)
console.log(vasco2.test(vasco))

console.log(vasco.search(/Vasco/i))
console.log(vasco.replace(/as/ig,"tst"))