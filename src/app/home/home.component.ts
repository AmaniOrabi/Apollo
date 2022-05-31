import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public service: AuthenticationService) {}
  public email: any;

  ngOnInit(): void {
    this.service.getCurrent().subscribe((payload) => {
      if (payload) {
        this.email = payload.email;
      }
    });
    console.log(this.service.userData);
  }
  logout(): void {
    this.service.logout().subscribe((data) => console.log(data));
  }
}
