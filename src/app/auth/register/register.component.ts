import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  registerUsername: string='';
  registerPassword: string='';

  register() {
    if (!this.registerUsername || !this.registerPassword) {
      alert('Username and password are required.');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users')|| '[]');
    const user = users.find((u: { username: string; }) => u.username === this.registerUsername);

    if (user) {
      alert('Username already exists. Please choose a different username.');
    } else {
      users.push({ username: this.registerUsername, password: this.registerPassword });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registration successful! You can now login.');
    }
  }
}
