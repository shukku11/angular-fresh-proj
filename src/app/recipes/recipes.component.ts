import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RecipeServices } from './recipe.services';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeItem: Recipe;

  ngOnInit(): void {
   this.recipeServices.recipeClicked.subscribe(
     (recipe:Recipe) => {
       this.recipeItem = recipe;
     }
   )
  }

  constructor(private recipeServices: RecipeServices) {
  }
}