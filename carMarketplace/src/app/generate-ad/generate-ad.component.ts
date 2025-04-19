import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-generate-ad',
  templateUrl: './generate-ad.component.html',
  styleUrls: ['./generate-ad.component.css'],
  standalone: false,
  
})
export class GenerateAdComponent {
  brand: string = '';
  condition: string = '';
  year: number | null = null;
  price: number | null = null;
  photo: File | null = null;

  constructor(private http: HttpClient) {}

  onPhotoSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.photo = file;
    }
  }

  submitAd() {
    if (!this.photo) {
      alert('Пожалуйста, загрузите фото!');
      return;
    }

    const formData = new FormData();
    formData.append('brand', this.brand);
    formData.append('condition', this.condition);
    formData.append('year', this.year!.toString());
    formData.append('price', this.price!.toString());
    formData.append('photo', this.photo);

    this.http.post('http://localhost:8000/api/cars/', formData).subscribe({
      next: (response) => {
        alert('Объявление успешно добавлено!');
        console.log(response);
        // Очистка формы
        this.brand = '';
        this.condition = '';
        this.year = null;
        this.price = null;
        this.photo = null;
      },
      error: (error) => {
        alert('Ошибка при отправке объявления.');
        console.error(error);
      }
    });
  }
}
