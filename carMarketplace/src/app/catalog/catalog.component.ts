import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catalog',
  standalone: false,
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  // Данные фильтра
  filter = {
    brand: '',
    condition: '',
    year: null as number | null,
    priceFrom: null as number | null,
    priceTo: null as number | null
  };

  // Данные автомобилей
  cars = [
    {
      id: 1,
      brand: 'Hyundai',
      model: 'Elantra',
      year: 2021,
      engine: '1.6 L',
      price: 7500000,
      condition: 'used',
      image: 'https://via.placeholder.com/400x200'
    },
    {
      id: 2,
      brand: 'Toyota',
      model: 'Camry',
      year: 2020,
      engine: '2.5 L',
      price: 10000000,
      condition: 'used',
      image: '/assets/images/Camry-75.png'
    },
    {
      id: 3,
      brand: 'Kia',
      model: 'K5',
      year: 2022,
      engine: '2.0 L',
      price: 9300000,
      condition: 'new',
      image: 'https://via.placeholder.com/400x200'
    },
    {
      id: 4,
      brand: 'BMW',
      model: 'X5',
      year: 2021,
      engine: '3.0 л',
      price: 15000000,
      condition: 'used',
      image: 'https://via.placeholder.com/400x200'
    },
    {
      id: 5,
      brand: 'Mercedes-Benz',
      model: 'C-Class',
      year: 2020,
      engine: '2.0 л',
      price: 12000000,
      condition: 'used',
      image: 'https://via.placeholder.com/400x200'
    },
    {
      id: 6,
      brand: 'Audi',
      model: 'A8',
      year: 2022,
      engine: '3.0 л',
      price: 15000000,
      condition: 'new',
      image: 'https://via.placeholder.com/400x200'
    }
  ];

  // Отфильтрованные автомобили
  get filteredCars() {
    return this.cars.filter(car => {
      // Фильтр по бренду
      if (this.filter.brand && !car.brand.toLowerCase().includes(this.filter.brand.toLowerCase())) {
        return false;
      }

      // Фильтр по состоянию
      if (this.filter.condition && car.condition !== this.filter.condition) {
        return false;
      }

      // Фильтр по году
      if (this.filter.year && car.year !== this.filter.year) {
        return false;
      }

      // Фильтр по цене
      if (this.filter.priceFrom && car.price < this.filter.priceFrom) {
        return false;
      }
      if (this.filter.priceTo && car.price > this.filter.priceTo) {
        return false;
      }

      return true;
    });
  }

  // Сброс фильтров
  resetFilters() {
    this.filter = {
      brand: '',
      condition: '',
      year: null,
      priceFrom: null,
      priceTo: null
    };
  }
}
