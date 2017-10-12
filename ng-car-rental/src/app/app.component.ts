import { CarRentalPrice, Location } from './app.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { ApiService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  queryResults$: Observable<CarRentalPrice[]>;
  locations$: Observable<Location[]>;
  rentalFormGroup: FormGroup;
  // select element for locations
  @ViewChild('locationSelect') locationSelect: ElementRef;
  // Text of the selected location option
  locationSelectText: string;

  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit() {
    this.locations$ = this.api.fetchLocations();
    this.rentalFormGroup = this.setupForm();
  }

  private setupForm(): FormGroup {
    return this.formBuilder.group({
        location: new FormControl('', Validators.required),
        month: new FormControl('', Validators.required)
    });
  }



  onLocationChange(event) {
    const id = event.target.value;
    this.locationSelectText = this.locationSelect.nativeElement.options[id].text;
  }

  submitForm(formGroup: FormGroup) {
    const location = formGroup.controls.location.value;
    const month = formGroup.controls.month.value;
    this.queryResults$ = this.api.findBestPrice(location, month);
  }

}
