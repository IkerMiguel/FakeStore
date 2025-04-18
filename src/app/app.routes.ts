import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Products',
    loadChildren: () => import('./Pages/products/product.route'),
  },
  {
    path: 'users',
    title: 'Users',
    loadComponent: () => import('./Pages/users/users.component'),
  },
  {
    path: 'cart',
    title: 'Cart',
    loadComponent: () => import('./Pages/cart/cart.component'),
  },
  {
    path: '**',
    redirectTo: 'products',
  }
];
