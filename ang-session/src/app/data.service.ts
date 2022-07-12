import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getAlbums() {
    return [
      {
        userId: 1,
        id: 1,
        title: 'quidem molestiae enim',
      },
      {
        userId: 1,
        id: 2,
        title: 'sunt qui excepturi placeat culpa',
      },
      {
        userId: 1,
        id: 3,
        title: 'omnis laborum odio',
      },
    ];
  }

  getfullAlbmus() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }
}
