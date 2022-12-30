import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeServices } from 'src/app/recipes/recipe.services';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  //@Output() recipeItem = new EventEmitter<Recipe>();
  @Input() recipe: Recipe;

  ngOnInit(): void {
  }

  constructor(private recipeServices: RecipeServices) { }

  onItemClick(recipe: Recipe) {
    this.recipeServices.recipeClicked.emit(recipe);
  }
}