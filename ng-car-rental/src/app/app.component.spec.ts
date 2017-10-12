import { CarRentalPrice, Location } from './app.model';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AppComponent } from './app.component';
import { ApiService } from './app.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        HttpClient,
        HttpHandler,
        { provide: ApiService, useClass: MockAPIService }
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Car Rental Options');
  }));

});

class MockAPIService extends ApiService {
  findBestPrice(location, month): Observable<CarRentalPrice[]> {
    return Observable.of([{make: 'Chevy', airport: 'Logan', price: 19.99}]);
  }

  fetchLocations(): Observable<Location[]> {
    return Observable.of(
      [
        {city: 'London', airport: 'Heathrow', location_id: 1},
        {city: 'Boston', airport: 'Logan', location_id: 2}
      ]
    );
  }

}
