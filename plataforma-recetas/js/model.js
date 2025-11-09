class RecipeModel {
    constructor() {
        this.recipes = [];
        this.nextId = 1;
    }

    addRecipe(name, type, ingredients, instructions, prepTime) {
        const recipe = {
            id: this.nextId++,
            name: name,
            type: type,
            ingredients: ingredients,
            instructions: instructions,
            prepTime: parseInt(prepTime)
        };
        this.recipes.push(recipe);
        return recipe;
    }

    deleteRecipe(id) {
        this.recipes = this.recipes.filter(recipe => recipe.id !== id);
    }

    searchRecipes(query) {
        if (!query) return this.recipes;
        return this.recipes.filter(recipe =>
            recipe.name.toLowerCase().includes(query.toLowerCase()) ||
            recipe.ingredients.toLowerCase().includes(query.toLowerCase())
        );
    }

    filterByType(type) {
        if (type === 'todas') return this.recipes;
        return this.recipes.filter(recipe => recipe.type === type);
    }

    getAllRecipes() {
        return this.recipes;
    }
}