import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductItemCart } from '../Interfaces/store.interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  loadProducts():Observable<ProductItemCart[]>{
    const rawProduct = localStorage.getItem('products');
    return of(rawProduct ? JSON.parse(rawProduct) : []);
  }

  saveProducts(products: ProductItemCart[]): void {
    localStorage.setItem('products', JSON.stringify(products));
  }
}
