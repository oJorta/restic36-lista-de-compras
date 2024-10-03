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
  title = 'lista-de-compras';
}
