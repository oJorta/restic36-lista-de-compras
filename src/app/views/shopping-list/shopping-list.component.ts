import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddNewItemComponent } from "../../add-new-item/add-new-item.component";
import { ShoppingListItemComponent } from "../../shopping-list-item/shopping-list-item.component";
import { HeaderComponent } from "../../header/header.component";
import { ShoppingListItem } from '../../types/shopping-list-item.model';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [RouterOutlet, AddNewItemComponent, ShoppingListItemComponent, HeaderComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  items = Array<ShoppingListItem>();

  ngOnInit() {
    const items = localStorage.getItem('items');

    if (items) {
      this.items = JSON.parse(items);
    }
  }
  
  addNewItem(itemName: string) {
    this.items.push({
      itemName,
      isBought: false,
    });
    this.sortItems();
    this.saveItems();
  }
  
  handleUpdateName(id: number, itemName: string) {
    this.items[id].itemName = itemName;
    this.saveItems();
  }
  
  handleToggleBought(id: number, isBought: boolean) {
    this.items[id].isBought = isBought;
    this.sortItems();
    this.saveItems();
  }
  
  handleDeleteItem(id: number) {
    this.items.splice(id, 1);
    this.sortItems();
    this.saveItems();
  }
  
  sortItems() {
    this.items.sort((a, b) => a.isBought === b.isBought ? 0 : a.isBought ? 1 : -1);
  }

  saveItems() {
    localStorage.setItem('items', JSON.stringify(this.items));
  }
}
