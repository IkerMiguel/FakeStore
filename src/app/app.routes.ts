import { Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    title: 'Products',
    loadChildren: () => import('./Pages/products/product.route'),
  },
  {
    path: 'users',
    title: 'Users',
    canActivate: [authGuard],
    loadComponent: () => import('./Pages/users/users.component'),
  },
  {
    path: 'cart',
    title: 'Cart',
    canActivate: [authGuard],
    loadComponent: () => import('./Pages/cart/cart.component'),
  },
  {
    path: 'login',
    title: 'Login',
    loadComponent: () => import('./Pages/auth/login/login.component'),
  },
  {
    path: '**',
    redirectTo: 'products',
  }
];
