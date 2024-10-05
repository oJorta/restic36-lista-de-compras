import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-list-item.component.html',
  styleUrl: './shopping-list-item.component.css'
})
export class ShoppingListItemComponent {
  @Input({required: true}) itemName!: string;
  @Input({required: true}) isBought!: boolean;

  updateName (event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.itemName = inputElement.value;
  }

  toggleBought () {
    this.isBought = !this.isBought;
  }
}
