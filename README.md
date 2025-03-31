# Programmation fonctionnelle

### **Objectifs**

- Comprendre les principes fondamentaux de la programmation fonctionnelle
- Découvrir l’immutabilité, les fonctions pures et l’évaluation paresseuse
- Apprendre à utiliser les fonctions d’ordre supérieur

---

## **1. Qu’est-ce que la programmation fonctionnelle ?**

La programmation fonctionnelle est **une manière d’écrire du code** qui repose sur l’idée que **tout est une fonction** et que l'on **évite de modifier les données**.

### **Différence avec la programmation classique**

| **Programmation impérative (classique)** | **Programmation fonctionnelle** |
| --- | --- |
| On dit *"fais ceci, puis cela"*. | On dit *"prends ceci et transforme-le"*. |
| On modifie des variables. | On crée de nouvelles valeurs. |
| Utilisation de boucles (`for`, `while`). | Utilisation de fonctions (`map`, `filter`, `reduce`). |
| Risque de bugs liés aux effets de bord. | Code plus prévisible et facile à tester. |

### **Exemple en JavaScript**

### **Méthode impérative (classique) :**

```jsx
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2; // Modification de la liste existante
}
console.log(numbers); // [2, 4, 6, 8, 10]
```

### **Méthode fonctionnelle :**

```jsx
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2); // Création d'une nouvelle liste
console.log(doubled); // [2, 4, 6, 8, 10]
```

➡️ On utilise `.map()` pour **transformer** la liste sans la modifier.

### 🔹 C’est quoi `map()` en JavaScript ?

`map()` c’est **une fonction spéciale pour les tableaux**.

Elle te permet de **transformer chaque élément du tableau** pour créer **un nouveau tableau**.

🧠 Imagine que t’as une ligne de pommes 🍎, et tu veux transformer chaque pomme en jus de pomme 🧃 → c’est ce que fait `map()` !

---

### 🔹 Exemple tout bête

```jsx
const nombres = [1, 2, 3, 4];

// On va doubler chaque nombre
const doublés = nombres.map(nombre => nombre * 2);

console.log(doublés); // [2, 4, 6, 8]
```

👉 Ici :

- Le tableau `nombres` est le point de départ.
- `.map()` applique `nombre * 2` à chaque élément.
- Le **résultat** est un **nouveau tableau**, avec les valeurs doublées.

---

### 🔹 Ce que `map()` ne fait **pas** :

- Elle **ne modifie pas** ton tableau d’origine.
- Elle **ne saute pas** d’éléments (elle touche à tout).
- Elle **renvoie un nouveau tableau** 📦.

---

### 🔹 Un autre exemple (plus visuel)

```jsx
const prénoms = ["Alice", "Bob", "Charlie"];

// On veut tous les prénoms en majuscules
const majuscules = prénoms.map(prenom => prenom.toUpperCase());

console.log(majuscules); // ["ALICE", "BOB", "CHARLIE"]
```

---

### Résumé :

| Ce que fait `map()` | Exemple |
| --- | --- |
| Elle parcourt un tableau | `[1, 2, 3]` |
| Elle applique une fonction à chaque élément | `x => x * 2` |
| Elle te rend un **nouveau** tableau | `[2, 4, 6]` |

---

## **2. Principes fondamentaux de la programmation fonctionnelle**

### **2.1. Immutabilité**

### 🔹 L’immutabilité, c’est quoi ?

**L’immutabilité**, ça veut juste dire :

> On ne change pas les choses, on en crée des nouvelles.
> 

🧠 En gros :

> Une fois qu’une valeur est créée, on ne la touche plus, on crée une copie modifiée si besoin.
> 

**Exemple :**

```jsx
const user = { name: "Alice", age: 25 };

// Mauvaise pratique : modification de l'objet existant
user.age = 26;

// Bonne pratique : création d'un nouvel objet
const updatedUser = { ...user, age: 26 };
console.log(updatedUser); // { name: "Alice", age: 26 }
```

---

### **2.2. Fonctions pures**

Une **fonction pure** est une fonction qui :

✅ Donne toujours le **même résultat** pour les **mêmes entrées**

✅ **N’a aucun effet de bord** (ne modifie pas de variables extérieures)

**Exemple : Fonction pure**

```jsx
const add = (a, b) => a + b; // Ne modifie rien, juste un calcul
// ou
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
```

**Exemple : Fonction non pure** (elle modifie une variable extérieure)

```jsx
let total = 0;// Fonction
const addToTotal = (x) => total += x; // Effet de bord
addToTotal(5);
console.log(total); // 5 (variable modifiée)
```

➡️ Une **fonction pure** est plus **prévisible** et **facile à tester**.

---

### **2.3. Fonctions d’ordre supérieur**

## 🔹 C’est quoi une **fonction d’ordre supérieur** ?

Une **fonction d’ordre supérieur** (ou *Higher-Order Function*) en JavaScript, c’est :

> Une fonction qui prend une autre fonction en paramètre, ou renvoie une fonction en résultat. ✅
> 

📦 En gros : c’est une fonction qui **travaille avec des fonctions**.

---

### 📌 Deux types :

1. ✅ Elle prend une fonction **en argument**
2. ✅ Elle retourne une fonction

---

### 🔸 Exemples simples

### **1. Elle prend une fonction en paramètre**

```jsx
function direBonjour(nom) {
  return "Bonjour " + nom;
}

function appelerFonctionAvecNom(fn) {
  return fn("Alice");
}

console.log(appelerFonctionAvecNom(direBonjour)); // "Bonjour Alice"
```

Ici, `appelerFonctionAvecNom` est une **fonction d’ordre supérieur**

👉 parce qu’elle **prend une fonction** (`direBonjour`) **en paramètre**.

---

### **2. Elle retourne une fonction**

```jsx
function multiplier(x) {
  return function(y) {
    return x * y;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
```

🧠 Ici, `multiplier(2)` retourne une **nouvelle fonction**

➡️ donc `multiplier` est aussi une fonction d’ordre supérieur !

---

### 🔸 Et en pratique ?

Des fonctions comme `map`, `filter`, `reduce` sont des **fonctions d’ordre supérieur**.

### Exemple avec `map` :

```jsx
const nombres = [1, 2, 3];

const doublés = nombres.map(num => num * 2);

console.log(doublés); // [2, 4, 6]
```

👉 `.map()` prend une fonction (`num => num * 2`)

➡️ donc **c’est une fonction d’ordre supérieur**.

➡️ Cela s’appelle **le currying**, un concept clé en programmation fonctionnelle.

---

### **2.4. Évaluation paresseuse**

## 🔹 C’est quoi l’évaluation paresseuse ?

**Évaluation paresseuse = JavaScript ne calcule quelque chose QUE si c’est vraiment nécessaire.**

🧠 Imagine que t’es sur ton canapé, et tu te dis :

> "Je ne vais me lever que si j’ai vraiment besoin d’eau."
> 

➡️ Ben c’est pareil. Le code **ne fait pas le travail tout de suite**, il attend qu’on lui demande.

---

## 🔸 En JavaScript, ça marche comment ?

> JavaScript n’est pas paresseux de base, mais on peut simuler cette logique avec des fonctions.
> 

---

### 🔸 Exemple "normal"

```jsx
const a = 3 + 4; // ici, le calcul est fait immédiatement
```

➡️ Pas paresseux. Le calcul est exécuté tout de suite.

---

### 🔸 Exemple avec **fonction paresseuse**

```jsx
const a = () => 3 + 4;

console.log(a()); // 7
```

➡️ Ici, rien n’est calculé tant qu’on n’a pas appelé `a()`

💡 C’est ça **l’évaluation paresseuse** : on **retarde le calcul**.

---

## 🔸 Pourquoi c’est utile ?

- ✅ Gagne en performance (on ne fait pas de calculs inutiles)
- ✅ Permet de **chaîner des opérations sans tout exécuter tout de suite**
- ✅ Utilisé **dans les langages fonctionnels comme Haskell**

### **Exemple en JavaScript avec `.filter()` et `.map()`**

```jsx
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers
  .filter(n => n % 2 === 0) // On garde les nombres pairs
  .map(n => n * 2); // On les double

console.log(result); // [4, 8, 12, 16, 20]
```

➡️ On applique `.filter()` d’abord, puis `.map()`, sans jamais modifier `numbers`.

---
