// EX 01

function print() {
    console.log("Hello World")
}

print()


// EX 02
function ex02 (idade) {
    console.log(`Você tem ${idade} anos`)
}

ex02(18)

// EX 03
function ex03 (a,b) {
    console.log(a+b)
    return a + b
}

ex03(6,8)

// EX04
function ex04 (a) {
    console.log(Math.random() *a) + 1
}

ex04(5)

// EX05
function ex05 (age) {
    if (age >= 18){
    console.log("Pode Entrar")
    } else{
    console.log("Pode não")
    }
}

ex05(18)

// EX06
function ex06 (tips) {
    console.log(`O dado "${tips}" é ` + typeof(tips))
}

ex06("vasco")

// EX07
function ex07 (negative) {
    console.log(Math.abs(negative))

    if (negative != Math.abs(negative)) {
        console.log("é negativo e o positivo dele é " + Math.abs(negative))
    } else {
        console.log(`O número ${negative} Não é negativo`)
    }
}

ex07(8)

// EX08
function ex08 (string) {
    if (string.length == 10){
        console.log("Ta longo")
    } else{
        console.log("Texto dentro do limite")
    }
}

ex08("vvvvvvvvvv")

// EX09
function ex09 (n1,n2) {
    console.log((n1) ** n2)
}

ex09(2,3)