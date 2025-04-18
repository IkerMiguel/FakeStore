import { Component, inject } from '@angular/core';
import CardProductComponent from "../../../Components/card-product/card-product.component";
import { ProductService } from '../../../Services/product.service';
import { Product } from '../../../Interfaces/store.interfaces';

@Component({
  selector: 'app-products-list',
  imports: [CardProductComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export default class ProductsListComponent {
  productService = inject(ProductService);
  products: Product[] = [];

  ngOnInit(){
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe((resp) => {
      this.products = resp;
      console.log(this.products);
    });
  }
}
