import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

// export interface albumsInfo{
//   userId: number;
//   id: number;
//   title: string };
export class HomeComponent implements OnInit {
  isTrue = true;
  demoName = '';
  getColor = 'green';
  users!: {}[];
  date!: Date;

  // From Service
  // albumsData!: {
  //   userId: number;
  //   id: number;
  //   title: string;
  // }[];

  albumsData: any;

  constructor(private albums: DataService) {
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

  ngOnInit(): void {
    // this.albumsData = this.albums.getAlbums();
    // this.albumsData = new Observable().subscribe((res) => {
    //   // console.log(res);
    //   return res;
    // });
    let scope = this;
    this.albums.getfullAlbmus().subscribe(function (res) {
      // console.log(res);
      scope.albumsData = res;
    });
    console.log(this.albumsData);
  }

  demo() {
    this.isTrue = !this.isTrue;
    console.log(this.isTrue);
  }
}
