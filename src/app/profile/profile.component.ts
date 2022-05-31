import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from './../services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(public fb: FormBuilder, public service: AuthenticationService) {}
  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    age: [''],
    gender: [''],
    emergencyNumber: [''],
  });

  ngOnInit(): void {}
  submitForm = () => {
    console.log(this.profileForm.value);
  };
}
