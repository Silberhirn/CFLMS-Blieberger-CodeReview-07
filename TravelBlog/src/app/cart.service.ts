import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
	items=[];
	sum=0;

  constructor() { }
  addToCart(destination) {
  	this.items.push(destination);
  }

   getItems() {
   return this.items;
 }
}
