// Fonction d'ordre supérieur (Higher-Order function)
// C'est une fonction qui prend une autre fonction en paramètre
// ou qui renvoie une fonction en résultat

function direBonjour(nom) {
    return "Bonjour "+nom;
}

function appelerFonctionAvecNom(fn) {
    return fn("Toto");
}

// Ici pas besoin de donner de paramètre à 'direBonjour' car 
// automatiquement ça aura la valeur de retour de appelerFonctionAvecNom
console.log(appelerFonctionAvecNom(direBonjour));

// Une fonction d'ordre supérieur  peut aussi retourner une autre fonction
function multiplier(x) { // Ma fonction multiplier ...
    return function(y) { // retourne une autre fonction
        return x * y; // Ou on multiplie x par y
    }
}

const double = multiplier(2); // double ici est égal à : 
// function(y) {
//     return x * y;
// }
// En sachant que x est égal à 
console.log(double(5)); // 5 c'est la valeur de y