import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  basketItems:Product[]=[]

  constructor() { }

  addBasket(item:any){
    this.basketItems.push(item);
  }

  getBasketItems():any[]{
    return this.basketItems;
  }
}
