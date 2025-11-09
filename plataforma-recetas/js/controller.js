class RecipeController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindAddRecipe(this.handleAddRecipe.bind(this));
        this.view.bindDeleteRecipe(this.handleDeleteRecipe.bind(this));
        this.view.bindSearch(this.handleSearchFilter.bind(this));
        this.view.bindFilter(this.handleSearchFilter.bind(this));

        this.updateView();
    }

    handleAddRecipe(values) {
        this.model.addRecipe(
            values.name,
            values.type,
            values.ingredients,
            values.instructions,
            values.prepTime
        );
        this.view.clearInputs();
        this.updateView();
    }

    handleDeleteRecipe(id) {
        this.model.deleteRecipe(id);
        this.updateView();
    }

    handleSearchFilter() {
        const query = this.view.getSearchQuery();
        const type = this.view.getFilterType();
        
        let recipes = this.model.getAllRecipes();
        
        if (query) {
            recipes = this.model.searchRecipes(query);
        }
        
        if (type !== 'todas') {
            recipes = recipes.filter(recipe => recipe.type === type);
        }
        
        this.view.displayRecipes(recipes);
    }

    updateView() {
        const recipes = this.model.getAllRecipes();
        this.view.displayRecipes(recipes);
    }
}

const app = new RecipeController(new RecipeModel(), new RecipeView());