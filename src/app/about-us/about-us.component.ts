import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  constructor(private service: AuthenticationService) {}

  ngOnInit(): void {
    this.service
      .login('alaac617@gmail.com', 'doudoud2D')
      .subscribe((payload) => {
        console.log(payload);
      });
  }
}
