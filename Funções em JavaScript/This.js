const pessoa = {
    firstName: "André",
    lastName: "Soares",
    id: 1,
    fullName: function() {
        return this.firstName+ " " + this.lastName;
    },
    getId: function() {
        return this.id;
    }
};

pessoa.fullName();
//"André Soares"

pessoa.getId();
// 1