// Exemplo 1 

function forInExemplo(obj) {
    for (prop in obj) {
        console.log(prop);
    }
}

const Objeto = {
    nome: "João",
    idade: "20",
    cidade: "Salvador"
}

forInExemplo(Objeto);
// nome
// idade
// cidade


// Exemplo 2

function forInExemplo(obj) {
    for (prop in obj) {
        console.log(obj[prop]);
    }
}

const meuObjeto = {
    nome: "João",
    idade: "20",
    cidade: "Salvador"
}

forInExemplo(meuObjeto);
// João
// 20
// Salvador