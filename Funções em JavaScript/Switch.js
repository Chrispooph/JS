function getAnimal(id) {
    switch(id) {
        case 1:
            return "Cão";
        case 2:
            return "Gato";
        case 3:
            return "Pássaro";
        default:
            return "Peixe";
    }
}

getAnimal(1) // Cão
getAnimal(4) // Peixe
getAnimal("1") // Peixe