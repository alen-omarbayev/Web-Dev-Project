import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; // Импортируем Router для редиректа

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

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router // Внедряем Router для редиректа
  ) {}

  // Проверка авторизации перед загрузкой формы объявления
  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']); // Перенаправляем на страницу входа, если пользователь не авторизован
    }
  }

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

    const token = this.authService.getToken();

    this.http.post('http://localhost:8000/api/cars/', formData, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).subscribe({
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
