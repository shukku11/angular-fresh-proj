import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListServices } from 'src/app/shopping-list/shoppping-list.services';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeItemInDetail: Recipe;

  constructor(private shoppingListServices: ShoppingListServices) { }

  ngOnInit(): void {
  }

  onSelectedShoppingList() {
    this.shoppingListServices.addIngredients(this.recipeItemInDetail.ingredients);
  }
}
