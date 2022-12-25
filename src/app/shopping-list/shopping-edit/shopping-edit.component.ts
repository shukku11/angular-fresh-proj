import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputLocal: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputLocal: ElementRef;
  @Output() addNewItem = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  addToList() {
    this.addNewItem.emit({ name: this.nameInputLocal.nativeElement.value, amount: Number(this.amountInputLocal.nativeElement.value) });
  }
}