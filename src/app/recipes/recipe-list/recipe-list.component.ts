import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeServices } from 'src/app/recipes/recipe.services';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeServices:RecipeServices) { }

  ngOnInit(): void {
    this.recipes = this.recipeServices.getRecipes();
  }
}
