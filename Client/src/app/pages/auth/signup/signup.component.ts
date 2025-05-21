import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  };
  acceptedTerms = false;

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Signup form submitted', this.user);
    // Add validation logic here
    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    // Implement your registration logic
    // this.authService.register(this.user).subscribe(...)
    this.router.navigate(['/']);
  }
}