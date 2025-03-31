// Fonctions pures

// Ici exemple de Fonction non pure 

let total = 0;

const addTotal = (x) => total += x; // Cette fonction modifie la valeur de total
// C'est l'équivalent de ...

// function addTotal(x) {
//     return total = total + x;
// }

// addTotal(5); // on execute la fonction addTotal
// console.log(total); // Affiche 5

// Fonction pure
const add = (a, b) => a + b;

// ou

// function add(a, b) {
//     return a + b;
// }

console.log(add(2, 3)); // Affiche 5