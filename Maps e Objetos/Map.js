function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === "Admin") {
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set("Luiz", "Admin");
usuarios.set("Miguel", "Admin");
usuarios.set("Marcos", "User");
usuarios.set("Crispa", "Admin");

console.log(getAdmins(usuarios));