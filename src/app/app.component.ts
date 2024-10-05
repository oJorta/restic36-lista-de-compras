import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddNewItemComponent } from "./add-new-item/add-new-item.component";
import { ShoppingListItemComponent } from "./shopping-list-item/shopping-list-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddNewItemComponent, ShoppingListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items = Array<{ itemName: string, isBought: boolean }>();

  addNewItem(itemName: string) {
    this.items.push({
      itemName,
      isBought: false,
    });
    this.sortItems();
  }

  handleToggleBought(id: number, isBought: boolean) {
    this.items[id].isBought = isBought;
    this.sortItems();
  }
  
  handleDeleteItem(id: number) {
    this.items.splice(id, 1);
    this.sortItems();
  }

  sortItems() {
    this.items.sort((a, b) => a.isBought === b.isBought ? 0 : a.isBought ? 1 : -1);
  }
}
