import { environment } from './../environments/environment.prod';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
// import { BASE_URL_TOKEN } from './app.module';
import { CarRentalPrice, Location } from './app.model';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
    @Inject('BaseUrl') private baseUrl: string
  ) { }

  findBestPrice(location, month): Observable<CarRentalPrice[]> {
    return this.http.get(`${this.baseUrl}/bestPrice?location=${location}&month=${month}`) as Observable<CarRentalPrice[]>;
  }

  fetchLocations(): Observable<Location[]> {
    return this.http.get(`${this.baseUrl}/locations`) as Observable<Location[]>;
  }
}
