import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    console.log('hi');

    console.log(this.authService.login('alaac617@gmail.com', 'doudoud2D'));
  }
}
