import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from './../services/authentication.service';
import { Chart } from 'chart.js';

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

  ngOnInit(): void {
    const str =
      '020001990200020102030202020402030205020002140220023002350236023502340232023002250220021502090209020902090209020902090209020902090209020903000350040905120650050004110350030002090';
    const arrayOfStr = str.match(/.{0,4}/g);
    const arrayOfNum: number[] = [];
    arrayOfStr?.forEach((str) => {
      arrayOfNum.push(Number(str));
    });
    var labels: number[] = [];
    for (let i = 0; i < str.length / 4; i++) {
      labels.push(i);
    }
    const myChart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'My First Dataset',
            data: arrayOfNum,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
          },
        ],
      },
      options: {
        scales: {},
      },
    });
  }

  submitForm = () => {};
}
