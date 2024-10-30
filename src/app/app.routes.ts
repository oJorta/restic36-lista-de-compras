import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ShoppingListComponent } from './views/shopping-list/shopping-list.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
