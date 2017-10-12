import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './app.service';
import { AppComponent } from './app.component';

const BASE_URL = 'http://localhost:3000';
export const BASE_URL_TOKEN = 'BaseUrl';
const URL_TOKEN = new InjectionToken<string>(BASE_URL_TOKEN);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: BASE_URL_TOKEN, useValue: BASE_URL },
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
