const retornaNome = function () {
    return this.nome;
};

let bruno = retornaNomes.bind({ nome: "Bruno"});

bruno();
//Bruno