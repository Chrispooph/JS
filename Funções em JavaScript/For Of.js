// Exemplo 1

function logLetras(palavra) {
    for(letra of palavra) {
        console.log (letra);
    }
}

const palavra = abacaxi

logLetras(palavra)
// a
// b
// a 
// c
// a
// x
// i

// Exemplo 2

function logNumeros(nums) {
    for(num of nums) {
        console.log(num);
    }
}

const nums = [30, 20, 233, 2]

logLetras(nums)
// 30
// 20
// 233
// 2