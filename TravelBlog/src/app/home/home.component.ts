import { Component, OnInit } from '@angular/core';
import { offers } from '../offers'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	offer;
	offers=offers;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
	this.route.paramMap.subscribe(params => {
	this.offer = offers[+params.get('offerId')];
     });
  }

}
