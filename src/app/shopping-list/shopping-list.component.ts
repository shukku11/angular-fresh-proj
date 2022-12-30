import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListServices } from './shoppping-list.services';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
  ingredients;
  constructor(private shoppingListServices:ShoppingListServices) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListServices.getIngredients();
    this.shoppingListServices.ingredientsChanged.subscribe(
      (ingredes:Ingredient[]) => {
        this.ingredients = ingredes;
      }
    )
  }
}