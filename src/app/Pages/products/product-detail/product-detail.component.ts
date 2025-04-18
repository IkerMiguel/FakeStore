import { Component, inject, input } from '@angular/core';
import { ProductService } from '../../../Services/product.service';
import { Product } from '../../../Interfaces/store.interfaces';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export default class ProductDetailComponent {
  productService = inject(ProductService);
  id = input.required<string>();

  product?: Product;
  
  ngOnInit(){
    this.getProduct();
  }
  
  getProduct(){
    this.productService.getProduct(this.id()).subscribe((resp) =>{
      this.product = resp;
      console.log(this.getProduct);
    });
  }
}
