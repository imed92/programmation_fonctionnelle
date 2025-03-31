// L'évaluation paresseuse

const a = 3 + 4;
// Ici le calcul est fait immédiatement, pas paresseux !!


const b = () => 3 + 4;
// Ici, rien n'est calculé tant qu'on n'a pas appelé b()
// C'est ça l'évaluation paresseuse, on retarde le calcul.

b(); // Ici on a effectué le calcul, sinon le calcul n'est pas fait.


// Ici on va vouloir retourner le double de chacun de ces integers ci dessous
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers
    .filter(n => n % 2 === 0) // On ne garde que les nombres pairs
    .map(n => n * 2); // On multiplie par 2

// Ici filter et map ne sont utilisés qu'une seule fois et d'un coup (2 fonctions executées 1 seule fois)
console.log(result); // Affiche [4, 8, 12, 16, 20]