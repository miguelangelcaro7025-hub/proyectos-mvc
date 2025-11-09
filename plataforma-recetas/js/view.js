class RecipeView {
    constructor() {
        this.nameInput = document.getElementById('recipeName');
        this.typeSelect = document.getElementById('recipeType');
        this.ingredientsInput = document.getElementById('ingredients');
        this.instructionsInput = document.getElementById('instructions');
        this.prepTimeInput = document.getElementById('prepTime');
        this.addBtn = document.getElementById('addBtn');
        this.searchInput = document.getElementById('searchInput');
        this.filterType = document.getElementById('filterType');
        this.recipesGrid = document.getElementById('recipesGrid');
    }

    displayRecipes(recipes) {
        if (recipes.length === 0) {
            this.recipesGrid.innerHTML = '<div class="empty-message">No hay recetas</div>';
            return;
        }

        this.recipesGrid.innerHTML = '';
        
        recipes.forEach(recipe => {
            const div = document.createElement('div');
            div.className = 'recipe-card';
            div.innerHTML = `
                <div class="recipe-header">
                    <div class="recipe-name">${recipe.name}</div>
                    <div class="recipe-type">${recipe.type}</div>
                </div>
                <div class="recipe-time">⏱️ ${recipe.prepTime} minutos</div>
                <div class="recipe-section">
                    <h4>Ingredientes:</h4>
                    <div class="recipe-ingredients">${recipe.ingredients}</div>
                </div>
                <div class="recipe-section">
                    <h4>Instrucciones:</h4>
                    <div class="recipe-instructions">${recipe.instructions}</div>
                </div>
                <div class="recipe-footer">
                    <button class="delete-btn" data-id="${recipe.id}">Eliminar</button>
                </div>
            `;
            this.recipesGrid.appendChild(div);
        });
    }

    clearInputs() {
        this.nameInput.value = '';
        this.typeSelect.selectedIndex = 0;
        this.ingredientsInput.value = '';
        this.instructionsInput.value = '';
        this.prepTimeInput.value = '';
    }

    getInputValues() {
        return {
            name: this.nameInput.value.trim(),
            type: this.typeSelect.value,
            ingredients: this.ingredientsInput.value.trim(),
            instructions: this.instructionsInput.value.trim(),
            prepTime: this.prepTimeInput.value
        };
    }

    getSearchQuery() {
        return this.searchInput.value.trim();
    }

    getFilterType() {
        return this.filterType.value;
    }

    bindAddRecipe(handler) {
        this.addBtn.addEventListener('click', () => {
            const values = this.getInputValues();
            if (values.name && values.ingredients && values.instructions && values.prepTime) {
                handler(values);
            }
        });
    }

    bindDeleteRecipe(handler) {
        this.recipesGrid.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-btn')) {
                const id = parseInt(e.target.dataset.id);
                handler(id);
            }
        });
    }

    bindSearch(handler) {
        this.searchInput.addEventListener('input', () => {
            handler();
        });
    }

    bindFilter(handler) {
        this.filterType.addEventListener('change', () => {
            handler();
        });
    }
}