import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListServices } from 'src/app/shopping-list/shoppping-list.services';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputLocal: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputLocal: ElementRef;

  constructor(private shoppingListService: ShoppingListServices) { }

  ngOnInit(): void {
  }

  addToList() {
    this.shoppingListService.onItemAdded({ name: this.nameInputLocal.nativeElement.value, amount: Number(this.amountInputLocal.nativeElement.value) });
  }
}