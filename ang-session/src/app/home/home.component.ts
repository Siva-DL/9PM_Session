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
  constructor() {}

  ngOnInit(): void {}

  demo() {
    this.isTrue = !this.isTrue;
    console.log(this.isTrue);
  }
}
