import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public showPassword: boolean = false;

  constructor() {}
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
