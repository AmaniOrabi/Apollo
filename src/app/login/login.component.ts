import { Component, Input, OnInit } from '@angular/core';
//import { CrudService } from '../services/crud.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  /*constructor(private service: CrudService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.service
      .getAll()
      .valueChanges()
      .subscribe((data) => console.log(data));
  }*/
  constructor(private fb: FormBuilder) {}
  ngOnInit() {}

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit() {
    console.warn(this.loginForm.value);
  }
}
