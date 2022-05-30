import { Component, Input, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private service: CrudService) {}
  ngOnInit(): void {
    this.service
      .getAll()
      .valueChanges()
      .subscribe((data) => console.log(data));
  }
}
