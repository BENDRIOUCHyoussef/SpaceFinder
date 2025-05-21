import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };
  rememberMe = false;

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Login form submitted', this.credentials);
    // Implement your authentication logic here
    // this.authService.login(this.credentials).subscribe(...)
    this.router.navigate(['/']);
  }
}