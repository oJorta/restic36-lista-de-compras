import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ShoppingListComponent } from './views/shopping-list/shopping-list.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
