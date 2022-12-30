import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

@Injectable({ providedIn: 'root' })
export class RecipeServices {
    recipeClicked: EventEmitter<Recipe> = new EventEmitter();

    private recipes: Recipe[] = [
        new Recipe('Naan-Kadhai-Paneer', 'Very tasty north indian dish', 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1600',
            [
                new Ingredient('Paneer Cubes', 10),
                new Ingredient('Flour', 5)
            ]),
        new Recipe('Samosas', 'This is eaten across INDIA', 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1600',
            [
                new Ingredient('Potatos', 3),
                new Ingredient('Peas', 10)
            ]
        )
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}