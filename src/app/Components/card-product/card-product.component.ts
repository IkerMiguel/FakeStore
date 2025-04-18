import { Component, input } from '@angular/core';
import { Product } from '../../Interfaces/store.interfaces';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-product',
  imports: [RouterModule],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export default class CardProductComponent {
  product = input.required<Product>();
}
