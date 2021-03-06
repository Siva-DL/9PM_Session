import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    console.log(this.demo(10));
    this.title = 'test';
    this.getProducts();
    this.isUserLocationMatched();
  }
  title: string = 'ang-session';
  constact: number = 1111111;
  isTrue: boolean = true;
  isColors: [number, string] = [1, '1'];
  person = { name: 'test', age: 121 };
  isObj: { name: string; age: number } = this.person;
  isSpecial = false;
  userLocation = '1234';
  users = [
    {
      name: 'xyz',
      age: 123,
    },
    {
      name: 'abc',
      age: 13,
    },
    {
      name: 'def',
      age: 14,
    },
  ];

  isUserLocationMatched() {
    if (this.userLocation === '1234') {
      this.isSpecial = false;
    }
  }

  // interfaces, enums

  demo(a: number): number {
    // const abc = 123;
    return a + parseInt('123');
  }

  getProducts() {
    fetch('https://fakestoreapi.com/products/1')
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then((err) => console.log(err));
  }
}
