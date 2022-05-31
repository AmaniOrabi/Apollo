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
      '0200020102020205020602030230023502450250027502500230021502000203020202050206020903000400050006000500040003000200020902050203020302000201020202050206020302300235024502500275025002300215020002030202020502060209030004000500060005000400030002000209020502030203';
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
