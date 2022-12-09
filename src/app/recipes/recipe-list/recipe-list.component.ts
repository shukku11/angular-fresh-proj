import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://media.istockphoto.com/id/1197494143/photo/men-eating-vegan-creamy-roasted-pumpkin-soup.jpg?s=612x612&w=is&k=20&c=jwB_JzudlI5sz_P9-mFDi1Z-NxvlPX9GXJLtsOBdTQw=')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
