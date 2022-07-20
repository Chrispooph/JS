// Exemplo 1

const pessoa = {
    nome: "Miguel",
};

const animal = {
    nome: "Murphy",
};

function getSomething() {
    console.log(this.nome);
}

getSomething.apply(pessoa);
//Miguel

// Exemplo 2

const ppl = {
    nome: "Miguel",
};

const mascote = {
    nome: "Murphy",
};

function getSomething() {
    console.log(this.nome);
}

getSomething.apply(mascote);
//Murphy

// Exemplo 3

const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 +a + b);
}

soma.apply(myObj, [1, 5]);
// 12