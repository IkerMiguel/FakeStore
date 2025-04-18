import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Observable } from 'rxjs';
import { Product } from '../Interfaces/store.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseHttpService{
  getProducts():Observable<any>{
    return this.http.get<Product[]>(`${this.apiUrl}/products`); 
  }
  getProduct(id:string):Observable<any>{
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }
}
