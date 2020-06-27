import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
items;
sum: number=0;
smallDiscount: number;
bigDiscount: number;
discSum: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  	this.items = this.cartService.getItems();
  	for (var i=0; i<this.items.length ;i++) {
  		this.sum=this.sum+this.items[i].calcPrice
  	}
  	this.smallDiscount=this.sum*0.1  
  	this.bigDiscount=this.sum*0.2	
  	if (this.sum>4999) {this.discSum=this.sum-this.bigDiscount}
  		else {
  			if (this.sum>1999) {this.discSum=this.sum-this.smallDiscount}
  		}
  }


}
