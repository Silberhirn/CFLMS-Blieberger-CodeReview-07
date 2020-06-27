import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent implements OnInit {
	destination;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  destinations=[{
  	destination: "Mordor",
  	description: "Mordor was a black, volcanic plain located in the southeast of Middle-earth to the East of Gondor, Ithilien and the great river Anduin. Mordor was chosen by Sauron to be his realm because of the mountain ranges surrounding it on three sides, creating a natural fortress against his enemies.",
  	date: "05.07.2020",
  	duration: "2 weeks",
  	price: "1.000€",
  	img: "/assets/img/mordor.jpg",
    calcPrice: 1000
  },{
  	destination: "Death Star",
  	description: "The Death Star is a fictional mobile space station and galactic superweapon featured in the Star Wars space-opera franchise. The first giant planet-killing space station known as the \"Death Star\" appeared on the 1965 film \"Attack from Space\". Both the concept and name were plagiarized in the original Star Wars film,[a]. The first Star Wars version is stated to be more than 120 kilometers (75 mi) in diameter, and is crewed by an estimated 1.7 million military personnel and 400,000 droids.[1][2] The second Death Star, which appears in Return of the Jedi, is significantly larger at between 160 kilometres (99 mi) to 900 kilometres (560 mi) in diameter, and technologically more powerful than its predecessor.",
  	date: "13.08.2020",
  	duration: "5 weeks",
  	price: "20.000€",
  	img: "/assets/img/deathstar.jpg",
    calcPrice: 20000
  },{
  	destination: "Dark Side of the Moon",
  	description: "There is no dark side of the moon really. Matter of fact it's all dark.",
  	date: "24.12.2020",
  	duration: "lifelong",
  	price: "everything",
  	img: "/assets/img/moon.jpeg",
    calcPrice: 99999999999999999999999
  },{
  	destination: "Rabbit Hole",
  	description: "Down, down, down. Would the fall never come to an end? \"I wonder how many miles I've fallen by this time?\" she said aloud. \"I must be getting somewhere near the centre of the earth. Let me see: that would be four thousand miles down, I think-\" (for, you see, Alice had learnt several things of this sort in her lessons in the school-room, and though this was not a very good opportunity for showing off her knowledge, as there was no one to listen to her, still it was good practice to say it over)\"-- yes that's about the right distance -- but then I wonder what Latitude or Longitude I've got to?\"",
  	date: "now",
  	duration: "one dream",
  	price: "societies expectations",
  	img: "/assets/img/hole.jpeg",
    calcPrice: -10.000
  },]

  ngOnInit(): void {  }

 addToCart(destination) {
   window.alert('Your product has been added to the cart!');
   this.cartService.addToCart(destination);
 }



}
