import { inject, Injectable, Signal } from '@angular/core';
import { ProductItemCart } from '../Interfaces/store.interfaces';
import { StorageService } from './storage.service';
import { count, map, Observable } from 'rxjs';
import { signalSlice } from 'ngxtension/signal-slice';

interface state {
  products: ProductItemCart[];
  loaded: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class CartStateService {
  private storageService = inject(StorageService);

  private initialState: state = {
    products: [],
    loaded: false,
  }

  loadProducts$ = this.storageService
    .loadProducts()
    .pipe(map((products) => ({products,loaded:true})));

  state = signalSlice({
    initialState: this.initialState,
    sources: [this.loadProducts$],
    selectors:(state)=>({
      count:() =>
        state().products.reduce((acc,product)=>acc+product.quantity,0),
        price: () =>{
          return state().products.reduce(
            (acc,product)=>acc+product.product.price*product.quantity,0
          );
        },
    }),
    actionSources: {
      add: (state, action$: Observable<ProductItemCart>) =>
        action$.pipe(map((product)=> this.add(state,product))),
      remove: (state, action$: Observable<number>) =>
        action$.pipe(map((id)=> this.remove(state,id))),
      update: (state, action$: Observable<ProductItemCart>) =>
        action$.pipe(map((product)=> this.update(state,product))),
    },
    effects: (state)=>({
      load: () => {
        if(state().loaded){
          this.storageService.saveProducts(state().products);
        }
        console.log(state().products);
      },
    }),
  });

  private add(state: Signal<state>,product:ProductItemCart){
    const isInCart = state().products.find(
      (productInCart) => productInCart.product.id === product.product.id,
    );

    if(!isInCart){
      return {
        products: [...state().products,{...product,quantity:1}]
      };
    }

    isInCart.quantity += 1;

    return{
      products: [...state().products]
    };
  }

  private remove(state: Signal<state>,id:number){
    return {
      products: state().products.filter((product)=> product.product.id !== id)
    }
  }

  private update(state: Signal<state>,product:ProductItemCart){
    const products = state().products.map((productInCart)=>{
      if(productInCart.product.id === product.product.id){
        return {...productInCart, quantity : product.quantity};
      }
      return productInCart;
    });

    return {products};
  }
}
