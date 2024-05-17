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
            str = `Recipe name is ${this.title},\n You can make ${this.servings} servings with the following ingredients: \n ${this.ingredients}`;
            return str;
        }
    };
    return recipe;
}

const recipeOne = createRecipe('Pizza', '3', ['sunca', 'cas', 'sos de rosii']);
const recipeTwo = createRecipe('Tiramisu', 6, ['mascarpone', 'cafea', 'piscoturi']);
console.log(recipeOne.displayRecipe());
console.log(recipeTwo.displayRecipe());