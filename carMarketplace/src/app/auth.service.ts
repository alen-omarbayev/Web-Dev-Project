import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://localhost:8000/api/auth'; // URL твоего Django бекенда
  private readonly TOKEN_KEY = 'auth_token';
  private readonly REFRESH_KEY = 'refresh_token';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  // Вход пользователя
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.API_URL}/login/`, { username, password }).pipe(
      tap((response: any) => {
        this.setTokens(response.access, response.refresh);
        this.router.navigate(['/profile']);
      })
    );
  }

  // Выход пользователя
  logout(): void {
    this.clearTokens();
    this.router.navigate(['/login']);
  }

  // Сохраняем токены в localStorage
  private setTokens(access: string, refresh: string): void {
    localStorage.setItem(this.TOKEN_KEY, access);
    localStorage.setItem(this.REFRESH_KEY, refresh);
  }

  // Очищаем токены
  private clearTokens(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_KEY);
  }

  // Получаем access token
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Получаем refresh token
  getRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_KEY);
  }

  // Проверяем, авторизован ли пользователь
  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }

  // Обновление токена (опционально)
  refreshToken(): Observable<any> {
    const refresh = this.getRefreshToken();
    return this.http.post(`${this.API_URL}/refresh/`, { refresh }).pipe(
      tap((response: any) => {
        this.setTokens(response.access, response.refresh);
      })
    );
  }
  // регистрация 
  register(username: string, email: string, password: string) {
    return this.http.post(
      'http://localhost:8000/api/register/',  // Полный URL
      { username, email, password },
      { headers: { 'Content-Type': 'application/json' } }
    );
  }
  // метод для получения данных пользователя
  getUserData(): Observable<any> {
    return this.http.get(`${this.API_URL}/user/`);
  }
  getUserProfile(): Observable<any> {
    return this.http.get(`${this.API_URL}/user/`, {
      headers: {
        'Authorization': `Bearer ${this.getToken()}` // Добавляем JWT токен
      }
    });
  }
}
