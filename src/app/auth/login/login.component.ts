import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginUsername: string='';
  loginPassword: string='';

  constructor(private router: Router) {}

  login() {
    if (!this.loginUsername || !this.loginPassword) {
    alert('Username and password are required.');
    return;
  }
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: { username: string; password: string; }) => u.username === this.loginUsername && u.password === this.loginPassword);

    if (user) {
      alert('Login successful!');
      this.router.navigate(['./pages/welcome']);
      } else{
      alert('Invalid username or password.');
    }
  }
}