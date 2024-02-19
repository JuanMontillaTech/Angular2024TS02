import { Routes } from '@angular/router';
import { ProductsListComponent } from './Components/products-list/products-list.component';
export const routes: Routes = [
    {
        path: 'products-list',
        component: ProductsListComponent
    },
    {
        path: '',
        component: ProductsListComponent

    }
];
