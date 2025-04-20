import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carMarketplace';
  userData: any = null;

  constructor(public authService: AuthService) {}
  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.authService.getUserProfile().subscribe(
        data => this.userData = data,
        error => console.error('Error fetching user data', error)
      );
    }
  }
}
