// Ici on a une liste d'integer stockés dans 'numbers'
const numbers = [1, 2, 3, 4, 5];


// // Ici je parcours ma liste 'numbers'
// for (let i = 0; i < numbers.length; i++) {
//     numbers[i] = numbers[i] * 2; // On MODIFIE les valeurs dans numbers
// }
// console.log(numbers); // [2, 4, 6, 8, 10]

// MAUVAISE PRATIQUE !!!!!!

// Avec la programmation fonctionnelle
// Ici on créer la constante nommée 'doubled'. 
const doubled = numbers.map(n => n * 2); // pour chaque élément de numbers, on va le multiplier par 2, et tout sera stocké dans 'doubled'
console.log("Initialement : "+numbers);
console.log("Devenu : "+doubled);
