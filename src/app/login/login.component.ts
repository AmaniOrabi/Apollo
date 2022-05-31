import { Component, Input, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthenticationService } from './../services/authentication.service';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private service: CrudService,
    private fb: FormBuilder,
    public authService: AuthenticationService,
    public route: ActivatedRoute,
    public router: Router
  ) {}
  ngOnInit(): void {
    // this.service
    //   .getAll()
    //   .valueChanges()
    //   .subscribe((data) => console.log(data));
    // this.showCurrentUser();
  }

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit() {
    this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe((data) => {
        this.authService.setData();
        this.router.navigate(['/']);
      });
  }
  showCurrentUser = () => {
    this.authService.currentUser$.subscribe((data) => console.log(data));
  };
  logout() {
    console.log('this is running');
    this.authService.logout().subscribe((data) => console.log(data));
  }
}
