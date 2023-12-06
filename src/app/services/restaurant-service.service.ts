import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Restaurant } from '../entities/restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  url: string;
  restaurantes = {};

  constructor(private http: HttpClient) {
    this.url = `${environment.urlAPI}`;
  }

  public getRestaurants(lat: number, lon: number): Observable<any> {
    let urlT = `${this.url}/${lat}/${lon}`;
    return this.http.get(urlT);
  }
}
