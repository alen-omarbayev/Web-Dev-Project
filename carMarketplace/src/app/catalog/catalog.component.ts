import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catalog',
  standalone: false,
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {

  constructor(private http: HttpClient) {}

  filter = {
    brand: '',
    condition: '',
    year: null as number | null,
    priceFrom: null as number | null,
    priceTo: null as number | null
  };

  cars: any[] = [];

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8000/api/cars/')
      .subscribe(data => {
        this.cars = data.map(car => ({
          ...car,
          image: 'http://localhost:8000/media/car_photos/' + car.photo // добавляем путь к фото
        }));
      });
  }

  get filteredCars() {
    return this.cars.filter(car => {
      if (this.filter.brand && !car.brand.toLowerCase().includes(this.filter.brand.toLowerCase())) return false;
      if (this.filter.condition && car.condition !== this.filter.condition) return false;
      if (this.filter.year && car.year !== this.filter.year) return false;
      if (this.filter.priceFrom && car.price < this.filter.priceFrom) return false;
      if (this.filter.priceTo && car.price > this.filter.priceTo) return false;
      return true;
    });
  }

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
