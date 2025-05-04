import { ProductsListComponent } from './pages/products-list/products-list.component';
import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [ {
    path: '' ,
    pathMatch   : 'full',
    component : ProductsListComponent 
},
{
    path: 'cart' ,
    loadComponent: () =>
        import('./pages/cart/cart.component').then((m) => m.CartComponent)
},
{      path: '**',
     component: PageNotFoundComponent}
];

