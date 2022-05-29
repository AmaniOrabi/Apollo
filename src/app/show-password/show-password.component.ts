import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-password',
  templateUrl: './show-password.component.html',
  styleUrls: ['./show-password.component.css'],
})
export class ShowPasswordComponent implements OnInit {
  showPassword: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
