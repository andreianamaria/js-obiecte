// Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată
// Ar trebui să aibă proprietăți pentru titlu (un șir de caractere), porții (un număr) și ingrediente (o șir de elemente - array). 
// Va fi afișată pe rânduri separate (o instrucțiune console.log pentru fiecare) toate informațiile obiectului după crearea acestuia.
// Input: titlu = “Pizza”, portii = 3, ingrediente = [“sunca”, “cas”, “ketchup”]
// Output: { titlu: “Pizza”, portii: 3, ingrediente: [”sunca”, “cas”, “ketchup”] }

const createRecipe = (title, servings, ingredients) => {
  const recipe = {
    title: title,
    servings: servings,
    ingredients: ingredients,
    displayRecipe: function () {
      return `Recipe name is ${this.title}, you can make ${this.servings} servings with the following ingredients ${this.ingredients}`;
    },
    toString: function() {
      return `{ title: ${this.title}, servings: ${this.servings}, ingredients: ${this.ingredients} }`;
    }
  };
  return recipe;
}

const recipeOne = createRecipe('Pizza', '3', ['sunca', 'cas', 'sos de rosii']);
const recipeTwo = createRecipe('Tiramisu', 6, ['mascarpone', 'cafea', 'piscoturi']);
console.log(recipeOne.displayRecipe());
console.log(recipeTwo.displayRecipe());

// met 2

console.log(recipeOne.toString());
console.log(recipeTwo.toString());


// met 3

console.log(JSON.stringify(recipeOne));
console.log(JSON.stringify(recipeTwo));