import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any;
  cartProducts: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    let data = localStorage.getItem('cart');
    if (data !== null) {
      this.cartProducts = JSON.parse(data);
    } else {
      this.cartProducts = [];
    }

    this.products = [
      {
        id: 1,
        title: 'Americano',
        description: 'Americano',
        img: 'assets/coffee1.jpeg',
        price: 45,
      },
      {
        id: 2,
        title: 'Cold Cofee',
        description: 'Cold Cofee',
        img: 'assets/coffee1.jpeg',
        price: 65,
      },
      {
        id: 3,
        title: 'Juice',
        description: 'Juice',
        img: 'assets/coffee1.jpeg',
        price: 74,
      },
      {
        id: 4,
        title: 'Horlicks',
        description: 'Horlicks',
        img: 'assets/coffee1.jpeg',
        price: 32,
      },
      {
        id: 5,
        title: 'Boost',
        description: 'Boost',
        img: 'assets/coffee1.jpeg',
        price: 27,
      },
      {
        id: 6,
        title: 'Maltova',
        description: 'Maltova',
        img: 'assets/coffee1.jpeg',
        price: 10,
      },
      {
        id: 7,
        title: 'Apple juice',
        description: 'Apple juice',
        img: 'assets/coffee1.jpeg',
        price: 50,
      },
      {
        id: 8,
        title: 'Papaya juice',
        description: 'Papaya juice',
        img: 'assets/coffee1.jpeg',
        price: 40,
      },
      {
        id: 9,
        title: 'Mosambi juice',
        description: 'Mosambi juice',
        img: 'assets/coffee1.jpeg',
        price: 35,
      },
      {
        id: 10,
        title: 'Capuccino',
        description: 'Capuccino',
        img: 'assets/coffee1.jpeg',
        price: 50,
      },
    ];
  }

  // functions
}
