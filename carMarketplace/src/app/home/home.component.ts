import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cars = [
    {
      image: '/assets/images/g63.jpg',
      name: 'Mercedes-Benz G 63 AMG',
      price: 'from 35 000 000 ₸'
    },
    {
      image: '/assets/images/sonata.avif',
      name: 'Hyundai Sonata',
      price: 'from 15 000 000 ₸'
    },
    {
      image: '/assets/images/bmw.webp',
      name: 'BMW M5 F90',
      price: 'from 100 000 000 ₸'
    },
    {
      image: '/assets/images/Camry-75.png',
      name: 'Toyota Camry 75',
      price: 'from 12 000 000 ₸'
    },
    {
      image: '/assets/images/Kia-k5.png',
      name: 'Kia k5',
      price: 'from 15 000 000 ₸'
    }

  ];
}
