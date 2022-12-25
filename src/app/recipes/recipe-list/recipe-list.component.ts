import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeItemEmitter = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://media.istockphoto.com/id/1197494143/photo/men-eating-vegan-creamy-roasted-pumpkin-soup.jpg?s=612x612&w=is&k=20&c=jwB_JzudlI5sz_P9-mFDi1Z-NxvlPX9GXJLtsOBdTQw='),
    new Recipe('A Test Recipe 2', 'This is simply another line', 'https://media.istockphoto.com/id/1197494143/photo/men-eating-vegan-creamy-roasted-pumpkin-soup.jpg?s=612x612&w=is&k=20&c=jwB_JzudlI5sz_P9-mFDi1Z-NxvlPX9GXJLtsOBdTQw=')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeItemClick(recipe: Recipe) {
    this.recipeItemEmitter.emit(recipe);
  }
}
