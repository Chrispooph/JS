function soma (num1, num2) {
    console.log (num1 + num2);
    return num1 + num2; 
}


soma(5, 8);

function comparaNumero(num1, num2) {
    if (!num1 || !num2) return "Defina dois números";
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return  `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2){
    let saoIguais = '';

    if(num1 !== num2) {
    saoIguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
}

function criaSegundaFrase(num1, num2){
    const soma = num1 + num2;

    let resultado10 = "menor";
    let resultado20 = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma < 10;

    if(compara10){
        resultado10 == 'maior'
    }

    if(compara20){
       resultado20 == 'maior' 
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log (comparaNumero());

// `` - Permite usar variavel dentro da string
// ! -> Falso

/*   If sem else
function comparaNumero(num1, num2) {
    const saoIguais = num1 === num2;
    const soma = num1 + num2;

    if(saoIguais) {
    return "São iguais";
}

return "Não são iguais" 

*/

/* Ternário 

function comparaNumero(num1, num2) {
    const saoIguais = num1 === num2;
    const soma = num1 + num2;

    return saoIguais ? "São iguais" : "Não são iguais";
}

*/

// Validação     if (!num1 || !num2) return "Defina dois números";