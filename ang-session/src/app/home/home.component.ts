import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isTrue = true;
  demoName = '';
  getColor = 'green';
  users!: {}[];
  date!: Date;
  constructor() {
    this.users = [
      {
        name: 'Albania',
        iso2: 'AL',
        iso3: 'ALB',
      },
      {
        name: 'Algeria',
        iso2: 'DZ',
        iso3: 'DZA',
      },
    ];
    this.date = new Date();
  }

  ngOnInit(): void {}

  demo() {
    this.isTrue = !this.isTrue;
    console.log(this.isTrue);
  }
}
