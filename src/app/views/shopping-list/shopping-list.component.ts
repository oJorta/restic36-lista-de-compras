import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddNewItemComponent } from "../../components/add-new-item/add-new-item.component";
import { ShoppingListItemComponent } from "../../components/shopping-list-item/shopping-list-item.component";
import { HeaderComponent } from "../../components/header/header.component";
import { ShoppingListItem } from '../../types/shopping-list-item.model';
import { ItemsService } from '../../services/items/items.service';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [RouterOutlet, AddNewItemComponent, ShoppingListItemComponent, HeaderComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  items!: Array<ShoppingListItem>;

  constructor(private itemService: ItemsService) {}

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      this.sortItems();
    })
  }
  
  addNewItem(itemName: string) {
    const newItem = {
      itemName,
      isBought: false,
      userId: 1
    }

    this.itemService.createItem(newItem).subscribe({
      next: (item) => {
        this.items.push(item)
        this.sortItems();
      },
      error: (err) => console.error('Erro: ', err)
    })
  }
  
  handleUpdateName(id: number, newItemName: string) {
    const targetItem = this.items.find(item => item.id === id);
    
    if (targetItem) {
      targetItem.itemName = newItemName;
      this.itemService.updateItem(targetItem).subscribe({
        next: (updatedItem) => {
          this.items = this.items.map(item => item.id === id ? updatedItem : item);
        },
        error: (err) => console.error('Erro: ', err)
      })
    }

  }
  
  handleToggleBought(id: number, isBought: boolean) {
    const targetItem = this.items.find(item => item.id === id);
    
    if (targetItem) {
      targetItem.isBought = isBought;
      this.itemService.updateItem(targetItem).subscribe({
        next: (updatedItem) => {
          this.items = this.items.map(item => item.id === id ? updatedItem : item);
          this.sortItems();
        },
        error: (err) => console.error('Erro: ', err)
      })
    }
  }
  
  handleDeleteItem(id: number) {
    this.itemService.deleteItem(id).subscribe({
      next: () => {
        this.items = this.items.filter(item => item.id !== id);
        this.sortItems();
      },
      error: (err) => console.error('Erro: ', err)
    })
  }
  
  sortItems() {
    this.items.sort((a, b) => a.isBought === b.isBought ? 0 : a.isBought ? 1 : -1);
  }
}
