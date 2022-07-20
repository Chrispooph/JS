//Exemplo 1 

function numeroPositivo(num) {
   let resultado;

   if (num < 0) {
    resultado = false;
   } else {
    resultado = true
   }
   return resultado;
}

numeroPositivo(2)
// true

numeroPositivo(-9)
//false

//Exemplo 2

function numeroPositivo(num) {
    let resultado;

    const ehNegativo = num < 0;

    if(ehNegativo) {
        resultado = false
    } else {
        resultado = true
    }
    return resultado;
}

//Exemplo 3 

function numeroPositivo(num) {
    const ehNegativo = num < 0;

    if(ehNegativo) {
        return false;
    }
    return true;
}