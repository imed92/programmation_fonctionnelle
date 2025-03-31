function is_pair(nombre) {
    // Ici on calcule le RESTE de la division grâce à % 2
    if (nombre % 2 === 0) { // Ici on met 3 '=' car on compare la valeur ET le type, quand il y a 2 '=', on compare seulement la valeur
        return "Pair";
    }
    else {
        return "Impair";
    }
}

console.log("4 est "+is_pair(4));
console.log("5 est "+is_pair(5));
console.log("6 est "+is_pair(6));
console.log("7 est "+is_pair(7));
