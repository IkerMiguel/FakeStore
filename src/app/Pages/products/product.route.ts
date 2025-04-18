import { Routes } from "@angular/router";

export default[
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    title: 'Products',
    loadComponent: () => import('./products-list/products-list.component'),
  },
  {
    path: 'product/:id',
    title: 'Products-Detail',
    loadComponent: () => import('./product-detail/product-detail.component'),
  },
] as Routes
